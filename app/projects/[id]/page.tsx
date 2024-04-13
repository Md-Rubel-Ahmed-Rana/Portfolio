import React from "react";

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  return <div>This is details page: {params.id}</div>;
};

export default ProjectDetails;
