/* eslint-disable tailwindcss/no-custom-classname */
export default function TableTopChannel() {
  const channel = [
    {
      id: 0,
      source: "Google",
      image: "../../../public/images/brand/brand-01.svg",
      visitors: 2870,
      revenues: 23.3,
      sales: 100,
      conversion: 20,
    },
    {
      id: 1,
      source: "Twitter",
      image: "../../../public/images/brand/brand-02.svg",
      visitors: 760.45,
      revenues: 340,
      sales: 230,
      conversion: 440,
    },
    {
      id: 2,
      source: "Github",
      image: "../../../public/images/brand/brand-03.svg",
      visitors: 860.34,
      revenues: 30,
      sales: 330,
      conversion: 560,
    },
    {
      id: 3,
      source: "Vimeo",
      image: "../../../public/images/brand/brand-04.svg",
      visitors: 5560,
      revenues: 4560,
      sales: 450,
      conversion: 780,
    },
  ];

  return (
    <div className="shadow-default border-stroke dark:border-strokedark dark:bg-boxdark sm:px-7.5 rounded-sm border bg-white px-5 pb-2.5 pt-6 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Channels
      </h4>

      <div className="flex flex-col">
        <div className="bg-gray-2 dark:bg-meta-4 grid grid-cols-3 rounded-sm sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="xsm:text-base text-sm font-medium uppercase">
              Source
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="xsm:text-base text-sm font-medium uppercase">
              Visitors
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="xsm:text-base text-sm font-medium uppercase">
              Revenues
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="xsm:text-base text-sm font-medium uppercase">
              Sales
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="xsm:text-base text-sm font-medium uppercase">
              Conversion
            </h5>
          </div>
        </div>

        {channel.map((channel, key) => (
          <div
            key={key}
            className="border-stroke dark:border-strokedark grid grid-cols-3 border-b sm:grid-cols-5"
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="shrink-0">
                <img src={channel.image} alt="Brand" />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {channel.source}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{channel.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${channel.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{channel.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{channel.conversion}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
