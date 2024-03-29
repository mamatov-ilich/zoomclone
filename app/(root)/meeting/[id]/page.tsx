const Meeting = ({ params }: { params: { id: string } }) => {
  return <div>Meeting Room: #{params.id}P\</div>;
};

export default Meeting;
