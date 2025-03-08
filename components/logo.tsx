import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div style={{ position: 'fixed', top: '5px', left: '20px', zIndex: '9999' }}>
      <Image src="/img/logo.svg" alt="Logo" width={150} height={50} />
    </div>
  );
};

export default Logo;