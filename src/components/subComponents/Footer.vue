<template>
  <div class="custom-container">
    <div class="c-branding c-branding--footer">
      <p class="c-branding__title">
        <a href="https://www.psychologies.co.uk/" rel="home">
          <span class="screen-reader-text">Psychologies</span>

          <svg class="c-branding__logo" width="98" height="28">
            <use xlink:href="#svg-logo"></use>
          </svg>
        </a>
      </p>
    </div>
    <div>
      <ul id="main-footer-menu" class="menu">
                <li id="menu-item-216503"
                    class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-216503">
                    <a href="/tests/" aria-current="page">Tests</a></li>
                <li id="menu-item-216857"
                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-216857"><a
                        href="https://www.psychologies.co.uk/relationships/">Relationships</a></li>
                <li id="menu-item-231856"
                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-231856"><a
                        href="https://www.psychologies.co.uk/emotional-wellbeing/">Emotional wellbeing</a></li>
                <li id="menu-item-231857"
                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-231857"><a
                        href="https://www.psychologies.co.uk/physical-wellbeing/">Physical wellbeing</a></li>
                <li id="menu-item-231858"
                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-231858"><a
                        href="https://www.psychologies.co.uk/career/">Career</a></li>
                <li id="menu-item-231855"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-231855"><a
                        href="/coaches">Find a Coach</a></li>
            </ul>
    </div>
    <div>
      <div class="c-nav-social__grid">
                <span class="c-nav-social__title screen-reader-text">Follow us on:</span>
                <ul id="social-menu" class="menu">
                    <li class="is-facebook menu-item menu-item-type-custom menu-item-object-custom menu-item-216451"><a
                            target="_blank" rel="noopener" href="https://www.facebook.com/Psychologiesmagazine"><svg
                                width="11" height="16">
                                <use xlink:href="#svg-social-icon-facebook"></use>
                            </svg><span class="screen-reader-text">Facebook</span></a></li>
                    <li class="is-twitter menu-item menu-item-type-custom menu-item-object-custom menu-item-216452"><a
                            target="_blank" rel="noopener" href="https://twitter.com/psychologiesmag"><svg width="16"
                                height="14">
                                <use xlink:href="#svg-social-icon-twitter"></use>
                            </svg><span class="screen-reader-text">Twitter</span></a></li>
                    <li class="is-youtube menu-item menu-item-type-custom menu-item-object-custom menu-item-216453"><a
                            target="_blank" rel="noopener" href="https://www.youtube.com/user/PsychologiesUK"><svg
                                width="16" height="12">
                                <use xlink:href="#svg-social-icon-youtube"></use>
                            </svg><span class="screen-reader-text">Youtube</span></a></li>
                    <li class="is-instagram menu-item menu-item-type-custom menu-item-object-custom menu-item-216468"><a
                            target="_blank" rel="noopener" href="https://www.instagram.com/psychologiesmagazine/"><svg
                                width="18" height="18">
                                <use xlink:href="#svg-social-icon-instagram"></use>
                            </svg><span class="screen-reader-text">Instagram</span></a></li>
                </ul>
            </div>
    </div>
    <div>
       <ul id="footer-menu" class="menu">
                    <li id="menu-item-216869"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-216869"><a
                            href="https://shop.kelsey.co.uk/terms-and-conditions">Terms &amp; Conditions</a></li>
                    <li id="menu-item-231852"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-231852"><a
                            href="https://www.psychologies.co.uk/newsletter-signup/">Sign Up To Our Free Newsletter</a>
                    </li>
                    <li id="menu-item-231854"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-231854"><a
                            href="https://www.psychologies.co.uk/about-us/">About Psychologies</a></li>
                    <li id="menu-item-231853"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-231853"><a
                            href="https://www.psychologies.co.uk/contact-team/">Contact the team</a></li>
                    <li class="menu-item" id="sourcepoint-gdpr-link" style="display:none"><a href="javascript:void(0)"
                            onclick="window._sp_.loadPrivacyManagerModal(473800)">Privacy Preferences</a></li>
                    <li class="menu-item" id="sourcepoint-ccpa-link" style="display:none"><a href="javascript:void(0)"
                            onclick="window._sp_ccpa.loadPrivacyManagerModal('6064fc336c291074b43ff281')">CCPA</a></li>
                </ul>
    </div>
    <div>
      <a class="c-membership-signin" href="https://www.psychologies.co.uk/login">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                    <path d="M8 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="#26313E" stroke-width="1.5"
                        stroke-miterlimit="10"></path>
                    <path d="M1.937 13.5a7.003 7.003 0 0 1 12.126 0" stroke="#26313E" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Coach Sign in</span>
            </a>
    </div>
    <div>
      <div class="c-copyright">

                <svg class="c-branding__logo-kelsey" width="135" height="40">
                    <use xlink:href="#svg-logo-kelsey"></use>
                </svg>
                <p class="c-copyright__text">
                    Kelsey Media, The Granary, Downs Court, Yalding Hill, Yalding, Kent ME18 6AL. <br>
                    ©
                    <span id="js-copyright">
                        2022
                    </span>
                    Kelsey Media Ltd, kelsey.co.uk
                </p><!-- .c-copyright__text -->
            </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      msg: "Contacts",
    };
  },
};
</script>

<style scoped>
.mp-4 {
  margin-right: 10px;
}
.header {
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.custom-container {
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
}
.header_menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.header_logo {
  color: palevioletred;
  font-weight: 600;
}
</style>
