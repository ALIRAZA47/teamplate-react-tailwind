import { DashboardView } from '@/views/DashboardView'

// This is a smart component that would fetch data
// For demo purposes, we're using mock data
export function DashboardPage() {
  // In a real app, you would fetch data here
  // const { data, loading, error } = useDashboardData()
  
  const mockData = {
    stats: {
      totalUsers: 2543,
      activeUsers: 1893,
      totalRevenue: 45231,
      growthRate: 12.5,
    },
    activities: [
      {
        id: '1',
        user: 'John Doe',
        action: 'Created a new project',
        timestamp: new Date().toISOString(),
        type: 'info' as const,
      },
      {
        id: '2',
        user: 'Jane Smith',
        action: 'Updated user settings',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        type: 'success' as const,
      },
      {
        id: '3',
        user: 'Bob Johnson',
        action: 'Deleted a file',
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        type: 'warning' as const,
      },
    ],
    chartData: [
      { label: 'Jan', value: 400 },
      { label: 'Feb', value: 300 },
      { label: 'Mar', value: 600 },
      { label: 'Apr', value: 800 },
      { label: 'May', value: 500 },
      { label: 'Jun', value: 900 },
    ],
  }

  return <DashboardView data={mockData} />
}

