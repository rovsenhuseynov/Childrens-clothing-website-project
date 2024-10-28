// import React from "react";
// import "./FooterTopRight.scss";

// const FooterTopRight = () => {
//   return (
//     <section className="footer__top-right">
//       <div className="top-right__links">

//         <div className="links__sitemap">
//           <h5 className="sitemap-title">SITEMAP</h5>

//           <p className="sitemap__shop">shop</p>
//           <p className="sitemap__meet-us">meet-us</p>
//           <p className="sitemap__our-impact">our-impact</p>
//           <p className="sitemap__gift-cards">gift-cards</p>
//           <p className="sitemap__faq">faq</p>
//           <p className="sitemap__blog">blog</p>
//           <p className="sitemap__contacts">contacts</p>
//         </div>

//         <div className="links__social">
//           <h5 className="social__title">SOCIAL</h5>

//           <p className="social__instagram">instagram</p>
//           <p className="social__facebook">facebook</p>
//           <p className="social__pinterest">pinterest</p>
//         </div>

//         <div className="links__customer-care">
//           <h5 className="customer-care__title">CUSTOMER CARE</h5>

//           <p className="customer-care__terms-conditions">terms-conditions</p>
//           <p className="customer-care__privacy-policy">privacy-policy</p>
//           <p className="customer-care__delivery-return">delivery-return</p>
//           <p className="customer-care__your-order">your-order</p>
//           <p className="customer-care__order">order</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FooterTopRight;




import React from "react";
import "./FooterTopRight.scss";

const FooterTopRight = () => {
  const sitemapLinks = ["shop", "meet-us", "our-impact", "gift-cards", "faq", "blog", "contacts"];
  const socialLinks = ["instagram", "facebook", "pinterest"];
  const customerCareLinks = ["terms-conditions", "privacy-policy", "delivery-return", "your-order", "order"];

  const renderLinks = (title, links, baseClass) => (
    <div className={`links__${baseClass}`}>
      <h5 className={`${baseClass}__title`}>{title}</h5>
      {links.map((link, index) => (
        <p key={index} className={`${baseClass}__${link}`}>{link}</p>
      ))}
    </div>
  );

  return (
    <section className="footer__top-right">
      <div className="top-right__links">
        {renderLinks("SITEMAP", sitemapLinks, "sitemap")}
        {renderLinks("SOCIAL", socialLinks, "social")}
        {renderLinks("CUSTOMER CARE", customerCareLinks, "customer-care")}
      </div>
    </section>
  );
};

export default FooterTopRight;