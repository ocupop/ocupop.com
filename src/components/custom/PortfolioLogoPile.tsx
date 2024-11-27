import Image from "@/components/base/Image"

const logos = [
  '/assets/_home/portfolio_logos/logo-1.svg',
  '/assets/_home/portfolio_logos/logo-2.svg',
  '/assets/_home/portfolio_logos/logo-3.svg',
  '/assets/_home/portfolio_logos/logo-4.svg',
  '/assets/_home/portfolio_logos/logo-5.svg',
  '/assets/_home/portfolio_logos/logo-6.svg',
  '/assets/_home/portfolio_logos/logo-7.svg',
  '/assets/_home/portfolio_logos/logo-8.svg',
  '/assets/_home/portfolio_logos/logo-9.svg',
  '/assets/_home/portfolio_logos/logo-10.svg',
  '/assets/_home/portfolio_logos/logo-11.svg',
  '/assets/_home/portfolio_logos/logo-12.svg',
  '/assets/_home/portfolio_logos/logo-13.svg',
  '/assets/_home/portfolio_logos/logo-14.svg',
  '/assets/_home/portfolio_logos/logo-15.svg',
  '/assets/_home/portfolio_logos/logo-16.svg',
];

export default function PortfolioLogoPile() {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-8 p-8 md:p-12 lg:p-16 gap-12 bg-mid-700 rounded-xl">
        {logos.map((logo, index) => (
          <div key={`logo-${index}`} className="h-full flex items-center">
            <Image
              max_width={100}
              image={logo}
              alt="Ocupop"
              className="shrink-0 max-h-12"
            />
          </div>
        ))}
    </div>
  )
}

