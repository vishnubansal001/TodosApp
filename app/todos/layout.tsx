import TodosList from "./TodosList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  <main className="flex">
    <div>
      <TodosList />
    </div>
    <div className="flex-1">{children}</div>
  </main>;
}
