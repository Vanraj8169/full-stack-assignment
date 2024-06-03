import PropTypes from "prop-types";

function Card(props) {
  const { data } = props;
  return (
    <div className="relative bg-melodyverse rounded-lg shadow-xl overflow-hidden">
      <div className="absolute inset-x-5 top-4 text-xs font-semibold text-primary uppercase line-clamp-1">
        {data.topics.map((topic, index) => (
          <span key={index} className="bg-primary text-white rounded-full px-2 py-1 mr-2 mb-1 inline-block">
            {topic}
          </span>
        ))}
      </div>
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold text-gray-800">{data.description}</h2>
      </div>
      <div className="px-6 pb-6">
        <p className="text-gray-600">
          Type: {data.types.map((type, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 mr-2 inline-block">
              {type}
            </span>
          ))}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {data.levels.map((level, index) => (
            <span key={index} className="bg-secondary text-white rounded-full px-3 py-1 text-sm">
              {level}
            </span>
          ))}
        </div>
        <a href={data.url} target="_blank" className="inline-block mt-4 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition duration-300">
          Learn More
        </a>
      </div>
    </div>
  );
}

Card.propTypes = { data: PropTypes.object.isRequired };

export default Card;
