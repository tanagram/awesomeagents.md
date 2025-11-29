interface HelloWorldProps {
  name?: string;
}

export function HelloWorld({ name = "World" }: HelloWorldProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-600">Hello, {name}!</h1>
      <p className="mt-4 text-gray-600">
        Welcome to your new Next.js application.
      </p>
    </div>
  );
}
