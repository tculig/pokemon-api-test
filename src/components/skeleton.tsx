const SkeletonLoader = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Types</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index}>
              <td>
                <div className="skeleton skeleton-text" />
              </td>
              <td>
                <div className="skeleton skeleton-image" />
              </td>
              <td>
                <div className="skeleton skeleton-text" />
              </td>
            </tr>
          ))}
        </tbody>
        <style jsx>{`
          .skeleton {
            background-color: #ddd;
            border-radius: 4px;
            animation: pulse 1.5s infinite ease-in-out;
          }
          .skeleton-text {
            height: 20px;
            width: 100px;
          }
          .skeleton-image {
            height: 40px;
            width: 40px;
          }
          @keyframes pulse {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
            }
          }
        `}</style>
      </table>
    );
  }

  export { SkeletonLoader }
  