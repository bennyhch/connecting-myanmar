import React, { useEffect } from "react";

const DonorboxForm = () => {
  useEffect(() => {
    // Create a script element and insert the Donorbox embed code
    const script = document.createElement("script");
    script.src = "https://donorbox.org/widget.js";
    script.setAttribute("paypalExpress", "false");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script element on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <iframe
        src="https://donorbox.org/embed/cm-official-webpage?default_interval=o&show_content=true"
        title="Donorbox Form"
        name="donorbox"
        allowpaymentrequest="allowpaymentrequest"
        seamless="seamless"
        frameBorder="0"
        scrolling="no"
        height="900px"
        width="100%"
        style={{
          maxWidth: "500px",
          minWidth: "250px",
          maxHeight: "none!important",
        }}
        allow="payment"
      ></iframe>
    </>
  );
};

export default DonorboxForm;
