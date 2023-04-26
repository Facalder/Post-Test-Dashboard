/* eslint-disable tailwindcss/no-custom-classname */
export default function Card({ icon, amount, description, percentage }) {
  return (
    <div className="border-stroke px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark rounded-sm border bg-white py-6">
      <div className="h-11.5 w-11.5 bg-meta-2 dark:bg-meta-4 flex items-center justify-center rounded-full">
        <i className={`${icon} text-primary text-xl`}></i>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {amount}
          </h4>
          <span className="text-sm font-medium">{description}</span>
        </div>

        <span className="text-meta-3 flex items-center gap-1 text-sm font-medium">
          {percentage > 4.5 && (
            <>
              {percentage}%<i className="ri-arrow-up-line"></i>
            </>
          )}
          {percentage < 4.5 && (
            <>
              <span className="text-meta-5">{percentage}%</span>
              <i className="ri-arrow-down-line text-meta-5"></i>
            </>
          )}
        </span>
      </div>
    </div>
  );
}
