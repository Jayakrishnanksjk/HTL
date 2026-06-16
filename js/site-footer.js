class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer style="margin-top: 0px">
        <div class="topper-section">
          <div class="Topper-containers">
            <h5 class="footer-section-header">Company</h5>
            <div class="footer-link-group">
              <a href="about.html">About Us</a>
              <a href="team.html">Our Team</a>
              <a href="culturePage.html">People & Culture</a>
              <a href="services.html">Services</a>
              <a href="CSR.html">ESG</a>
              <a href="terms.html">Terms & Conditions</a>
              <a href="privacy.html">Privacy Policy</a>
            </div>
          </div>
          <div class="Topper-containers">
            <h5 class="footer-section-header">services</h5>
            <div class="footer-link-group">
              <a href="hvac.html">HVAC</a>
              <a href="mep.html">MEP</a>
              <a href="BaseBuild.html">Base build</a>
              <a href="Cleanroom.html">Cleanrooms</a>
              <a href="InteriorFitout.html">C&I & Interior fit-out</a>
              <a href="VirtualProjectManagement.html">Virtual Project Management</a>
              <a href="OperationNmaintainance.html">Operations & Maintenance</a>
            </div>
          </div>
          <div class="Topper-containers">
            <h5 class="footer-section-header">Sectors</h5>
            <div class="footer-link-group">
              <a href="commGcc.html">Commercial Real Estate & GCC</a>
              <a href="Industrial.html">Industrial & Warehousing</a>
              <a href="DataCentres.html">Data Centres & Critical rooms</a>
              <a href="Biotech.html">Pharma & biotech life sciences</a>
              <a href="hospitality.html">Hospitality & Luxury Retail</a>
              <a href="healthcare.html">Hospital & healthcare</a>
              <a href="Educational.html">Educational institutes</a>
              <a href="Infra.html">Gov & Infra</a>
            </div>
          </div>
          <div class="Topper-containers-last">
            <div class="last-inner-containers">
              <h5 class="footer-section-header">Contact us</h5>
              <div class="footer-link-group">
                <a href="mailto:info@htlaircon.com">info@htlaircon.com</a>
                <a href="tel:+912242174700">+91 22-42174700</a>
              </div>
            </div>
            <div class="last-inner-containers">
              <h5 class="footer-section-header">Follow us on</h5>
              <div class="footer-link-group">
                <a href="https://www.linkedin.com/company/htlaircon/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-section">
          <div class="left">
            <img src="./images/Logomain.svg" height="56px" alt="logo footer" />
            <object data="./images/Logo/iso.svg" type="image/svg+xml" height="48px"></object>
          </div>
          <div class="right">
            <div class="location-group">
              <a href="https://share.google/dYqwM77PdZPv6NQja" target="_blank" rel="noopener noreferrer">Mumbai</a>
              <p>|</p>
              <a href="https://share.google/fDctcd6HFeUzxvvYq" target="_blank" rel="noopener noreferrer">CBD-Belapur</a>
              <p>|</p>
              <a href="https://share.google/f0iUtcToDOtrwf9Aw" target="_blank" rel="noopener noreferrer">Pune</a>
              <p>|</p>
              <a href="https://share.google/f0iUtcToDOtrwf9Aw" target="_blank" rel="noopener noreferrer">Bangalore</a>
              <p>|</p>
              <a href="https://share.google/RqXjhF3mnm6aI3mZI" target="_blank" rel="noopener noreferrer">Ahemdabad</a>
              <p>|</p>
              <a href="https://share.google/vvixY7bbSVbcva8Qg" target="_blank" rel="noopener noreferrer">New Delhi</a>
              <p>|</p>
              <a href="https://share.google/NwzIG9w7KWwRPq3ca" target="_blank" rel="noopener noreferrer">Hyderabad</a>
              <p>|</p>
              <a class="non-clickable">Africa</a>
            </div>

            <p class="copyrights">
              Copyright © <span id="currentYear"></span> HTL AIRCON Brand by HTL AIRCON PVT LTD. All rights reserved<br>
              Powered by <a href="https://dms.family/" target="_blank" rel="noopener noreferrer" class="copyright-link">DMS</a>
            </p>
          </div>
        </div>
      </footer>
    `;

    // Populate current year dynamically
    const yearSpan = this.querySelector('#currentYear');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }
}

// Ensure display block for custom element wrapper
const style = document.createElement('style');
style.textContent = `
  site-footer {
    display: block;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;
document.head.appendChild(style);

customElements.define('site-footer', SiteFooter);
