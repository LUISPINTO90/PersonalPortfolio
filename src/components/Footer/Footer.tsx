export default function Footer() {
  return (
    <footer className="border-t border-t-neutral-300 dark:border-t-neutral-600">
      <div className="max-w-screen-xl mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Luis Pinto - Portfolio™. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
