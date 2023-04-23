import EmailButton from "../../utilities/EmailButton";

const Contacts = () => {
  return (
    <div className="text-center flex flex-col items-center mt-[240px] pb-[124px]">
      <h3 className="text-font-primary text-4xl">Contact Me</h3>
      <p className="text-font-secondary text-2xl pt-6 pb-12 max-w-[500px]">
        If you are looking to hire a product designer, I'm currently available
        for freelance work
      </p>
      <EmailButton />
    </div>
  );
};

export default Contacts;
