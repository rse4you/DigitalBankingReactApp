import { create } from 'zustand';

import { persist } from 'zustand/middleware';

// past due loan
type PastDue = {
  loanName: string;
  totalDue: number;
  dueDate: string;
};

// regular loan
type Loan = {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
  pastDue: boolean;
};

// loan summary
type LoanSummary = {
  totalDue: number;
  loanCount: number;
  latestDue: string;
  loans: Loan[];
};

// activity items
type ActivityItem = {
  name: string;
  amount: number;
  dueDate: string;
  type: string;
  color: string;
};

type LoanStore = {
  pastDue: PastDue | null;
  loanSummary: LoanSummary | null;
  activity: ActivityItem[] | null;
  fetchPastDue: () => Promise<void>;
  fetchLoanSummary: () => Promise<void>;
  fetchActivity: () => Promise<void>;
  reset: () => void;
};

let cachedData: {
  pastDue: PastDue;
  loanSummary: LoanSummary;
  activity: ActivityItem[];
} | null = null;

// generate new mockdata
const generateMockData = () => {
  if (cachedData) return cachedData;

  const getRandomAmount = (min = 100, max = 6000) =>
    parseFloat((Math.random() * (max - min) + min).toFixed(2));

  const getRandomDate = () => {
    const today = new Date();
    const futureDate = new Date(today.setDate(today.getDate() + Math.floor(Math.random() * 60)));
    return futureDate.toLocaleDateString('en-US');
  };

  const loanNames = [
    'Field Tractor',
    'Richard Farms',
    'Apple Orchards',
    'Harvester',
    'Corn Fields',
    'Wheat Combine',
    'Soybean Sprayer',
  ];

  const getRandomLoan = (id: number, isPastDue = false): Loan => {
    const name = loanNames[Math.floor(Math.random() * loanNames.length)];
    return {
      id: id.toString(),
      name: `${name} (${Math.floor(Math.random() * 9000) + 1000})`,
      amount: getRandomAmount(),
      dueDate: getRandomDate(),
      pastDue: isPastDue,
    };
  };

  const loanCount = Math.floor(Math.random() * 3) + 3;
  const pastDueLoan = getRandomLoan(1, true);
  const otherLoans = Array.from({ length: loanCount - 1 }, (_, i) => getRandomLoan(i + 2, false));
  const allLoans = [pastDueLoan, ...otherLoans];

  const loanSummary: LoanSummary = {
    totalDue: allLoans.reduce((sum, loan) => sum + loan.amount, 0),
    loanCount: allLoans.length,
    latestDue: allLoans[allLoans.length - 1].dueDate,
    loans: allLoans,
  };

  const pastDue: PastDue = {
    loanName: pastDueLoan.name,
    totalDue: pastDueLoan.amount,
    dueDate: pastDueLoan.dueDate,
  };

  const activity: ActivityItem[] = [
    {
      name: `${loanNames[Math.floor(Math.random() * loanNames.length)]} (${Math.floor(Math.random() * 9000) + 1000})`,
      amount: getRandomAmount(),
      dueDate: getRandomDate(),
      type: 'AutoDraft',
      color: '#006400',
    },
    {
      name: `${loanNames[Math.floor(Math.random() * loanNames.length)]} (${Math.floor(Math.random() * 9000) + 1000})`,
      amount: getRandomAmount(),
      dueDate: getRandomDate(),
      type: 'Scheduled',
      color: '#006400',
    },
  ];

  cachedData = { pastDue, loanSummary, activity };
  return cachedData;
};

// loan store that defines the functions for genearting, retreiving, and refreshing mock data
export const useLoanStore = create<LoanStore>()(
  persist(
    (set) => ({
      pastDue: null,
      loanSummary: null,
      activity: null,
      fetchPastDue: async () => {
        const data = generateMockData();
        set({ pastDue: data.pastDue });
      },
      fetchLoanSummary: async () => {
        const data = generateMockData();
        set({ loanSummary: data.loanSummary });
      },
      fetchActivity: async () => {
        const data = generateMockData();
        set({ activity: data.activity });
      },
      reset: () => {
        cachedData = null; // Clear the mock cache
        const data = generateMockData();
        set({ pastDue: data.pastDue, loanSummary: data.loanSummary, activity: data.activity });
        },

    }),
    {
      name: 'loan-store', // storage key
    }
  )
);
