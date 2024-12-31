export function Stats() {
  const stats = [
    { count: "250+", label: "Courses by our best mentors" },
    { count: "1000+", label: "Courses by our best mentors" },
    { count: "15+", label: "Courses by our best mentors" },
    { count: "2400+", label: "Courses by our best mentors" },
  ];

  return (
    <section className="container py-16 bg-gray-50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
        {stats.map((stat, index) => (
          <div key={index} className="relative text-center">
            {index > 0 && (
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-14 w-[3px] rounded-full bg-gray-300" />
            )}
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
              {stat.count}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-[150px] sm:max-w-[200px] mx-auto">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
