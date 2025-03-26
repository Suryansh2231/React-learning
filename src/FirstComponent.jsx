import App from "./App";
import "./App.css";

function FirstComponent() {
  return (
    <>
      <h2> Developer Portal</h2>
      <p>
        {" "}
        If you want to enhance your qualities as a developer. Visit this
        developer portal
      </p>
      <nav>
        <ul style={{ color: "red" }}>
          <li>
            <a href="https://developers.google.com/" target="_blank">
              Google
            </a>
          </li>
          <li>
            <a href="https://developers.facebook.com/" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://developers.apple.com/" target="_blank">
              Apple
            </a>
          </li>
          <li>
            <a href="https://developers.amazon.com/" target="_blank">
              Amazon
            </a>
          </li>
          <li>
            <a href="https://developers.microsoft.com/" target="_blank">
              Microsoft
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default FirstComponent;
