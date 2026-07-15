interface PageProps {
  params: {
    id: string;
  };
}
const GamePostDetailPage =async ({params}:PageProps) => {
    const {id}=await params;
    console.log(id,"idddddddddddddddd")
    return (
        <div className=' text-white'>
            this is post detail pages
        </div>
    );
};

export default GamePostDetailPage