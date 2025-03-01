function MockUp() {
  return (
    <section className="flex flex-col gap-3">
      {" "}
      <p>For framework projects :</p>
      <div className="mockup-code bg-white bg-opacity-5">
        <pre data-prefix="$" className="text-text-color">
          <code>git clone Url</code>
        </pre>
        <pre data-prefix="$" className="text-text-color">
          <code>npm install </code>
        </pre>
        <pre data-prefix="$" className="text-text-color">
          <code>Done!</code>
        </pre>
      </div>
    </section>
  );
}
export default MockUp;
