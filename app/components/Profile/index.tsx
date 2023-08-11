import Image from "next/image";
import Link from "next/link";

type ProfileProps = {
  width: number;
  height: number;
};

const Profile = ({ width, height }: ProfileProps) => {
  return (
    <Link href={`https://github.com/luannzin`} target="_blank">
      <Image
        src={`https://github.com/luannzin.png`}
        alt="https://github.com/luannzin"
        width={width}
        height={height}
        className="rounded-full cursor-pointer hover:saturate-[0.8] hover:scale-95 transition-all duration-200 select-none"
        draggable={false}
      />
    </Link>
  );
};

export default Profile;
