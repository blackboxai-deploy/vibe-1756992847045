import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
            Hello World!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-lg text-gray-600">
            Welcome to your Next.js application
          </p>
          <p className="text-sm text-gray-500">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
          <div className="pt-4">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              🚀 Ready to build amazing things
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}