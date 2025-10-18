import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes.const'
import NotFoundIllustration from '@/assets/illustrations/not-found-illus.svg'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-lg mx-auto text-center space-y-8">
        <div className="w-full max-w-md mx-auto">
          <img 
            src={NotFoundIllustration} 
            alt="404 Page not found" 
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 max-w-xs mx-auto">
          <button
            onClick={() => navigate(ROUTES.DASHBOARD)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Go to Dashboard
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex-1 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-3 px-4 rounded-lg border border-gray-300 dark:border-gray-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

