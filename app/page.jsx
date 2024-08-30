import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br />
        <span className="red_gradient text-center">AI-Powered Promts</span>
      </h1>
      <p className="desc text-center">
        PromptHive is an open platform for modern creators to find, create, and
        share unique AI-generated prompts.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
