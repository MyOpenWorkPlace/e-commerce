import twitter from "../assets/icons/twitter.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";

function FooterNavigate() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4">
        <h2 className="text-[25px] font-integral font-semibold">F'Boutique</h2>
        <p>
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <ul className="flex gap-3">
          <li>
            <a href="https://x.com/" target="blank">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="blank">
              <img src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="blank">
              <img src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MyOpenWorkPlace/e-commerce.git"
              target="blank"
            >
              <img src={github} alt="" />
            </a>
          </li>
        </ul>
      </div>

      <ul className="grid grid-cols-2 gap-6">
        <li>
          <h3 className="text-sm font-medium mb-3">Company</h3>
          <ul className="grid gap-2 text-gray-500">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </li>
        <li>
          <h3 className="text-sm font-medium mb-3">HELP</h3>
          <ul className="grid gap-2 text-gray-500">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </li>
        <li>
          <h3 className="text-sm font-medium mb-3">FAQ</h3>
          <ul className="grid gap-2 text-gray-500">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </li>
        <li>
          <h3 className="text-sm font-medium mb-3">RESOURCES</h3>
          <ul className="grid gap-2 text-gray-500">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default FooterNavigate;
