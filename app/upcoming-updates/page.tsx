import { getUpdateData } from "../apis/update.api";
import { IUpdate } from "../types/update.types";

const Updates = async () => {
  const data = (await getUpdateData()) as IUpdate[];
  return (
    <div className="min-h-screen lg:p-8 p-2 bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-4xl font-bold text-gray-700 text-center">
          Upcoming updates
        </h3>
        <ul className="space-y-8 mt-10">
          {data.map((update) => (
            <li key={update.id} className="shadow rounded-lg p-4">
              <h4 className="text-lg font-medium mb-2">
                {update.title}{" "}
                <span className="text-gray-400 font-sans">
                  {" "}
                  {`(${update.category})`}{" "}
                </span>
              </h4>
              <p className="text-gray-700 mb-2">{update.description}</p>
              <p className="text-sm mb-2">Status: {update.status}</p>
              <p className="text-sm text-gray-500">
                Priority: {update.priority}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Updates;
