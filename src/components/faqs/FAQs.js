import React from "react";
import "./FAQs.scss";

function FAQs() {
  return (
    <>
      <section id="faq" className="faq">
        <div className="faq__contentWrapper">
          <div className="faq__title-wrapper">
            <h1 id="faqs" className="faq__title">
              FAQ
            </h1>
          </div>
          <div className="faq__box">
            <h3 className="faq__subtitle">What is the EA app?</h3>
            <p className="faq__subtext">
              The EA app for Windows is Electronic Arts’ all new, enhanced PC
              platform, where you can easily play your favorite games. The app
              provides a streamlined and optimized user interface that gets you
              into your games faster than ever before.
            </p>
          </div>
          <div className="faq__box">
            <h3 className="faq__subtitle">Who can download the EA app?</h3>
            <p className="faq__subtext">
              The EA app is available to all players on a (minimum) 64-bit PC
              system, running Windows 7, 8, 10, and 11.
            </p>
          </div>
          <div className="faq__box">
            <h3 className="faq__subtitle">
              What’s the difference between the EA app and Origin?
            </h3>
            <p className="faq__subtext">
              The EA app is our latest PC platform, designed with player
              feedback in mind to be foundational for the future of EA PC
              gaming. Origin is our legacy client, and will soon be replaced by
              the EA app.
            </p>
          </div>
          <div className="faq__box">
            <h3 className="faq__subtitle">Will the EA app replace Origin?</h3>
            <p className="faq__subtext">
              Yes, the EA app will replace Origin to be our primary platform for
              downloading and launching PC games.
            </p>
          </div>
          <div className="faq__box">
            <h3 className="faq__subtitle">
              I’ve been invited to download the EA app, what should I expect?
            </h3>
            <p className="faq__subtext">
              When you accept the invitation, the EA app download process will
              begin. Origin will be uninstalled automatically - this ensures you
              will not experience any conflicts or errors related to having both
              clients installed on your PC simultaneously. Once you complete the
              update process, your games and content will be ready for play.
            </p>
          </div>
          <div className="faq__box">
            <h3 className="faq__subtitle">
              Will all my games and content transfer to the EA app?
            </h3>
            <p className="faq__subtext">
              By the time you receive your invite through Origin, all your
              games, DLC and other content should be ready to launch through the
              EA app. If you find anything missing from the EA app, please
              <a href="#">
                <p className="red"> contact us </p>
              </a>{" "}
              so we can resolve the issue.
            </p>
          </div>
          <div className="faq__box">
            <h3 className="faq__subtitle">
              Will I have to re-download my Origin games on the EA app?
            </h3>
            <p className="faq__subtext">
              No. The games you’ve downloaded through Origin should be ready to
              launch through the EA app. If you find any of your games, DLC or
              other content missing from the EA app, please{" "}
              <a href="#">
                <p className="red"> contact us </p>
              </a>
              so we can help resolve the issue.
            </p>
          </div>
          <div className="faq__box">
            <h3 className="faq__subtitle">
              Does my account transfer to the EA app? How do I login to the EA
              app?
            </h3>
            <p className="faq__subtext">
              Your EA Account is what you use today to log into Origin - you’ll
              use the same credentials to login to the EA app.
            </p>
          </div>
          <div className="faq__box">
            <h3 className="faq__subtitle">
              Will my save data transfer over to the EA app?
            </h3>
            <p className="faq__subtext">
              Yes. Any saved data currently on your PC or saved via Origin’s
              cloud will transfer.
            </p>
          </div>
          <div className="faq__box">
            <h3 className="faq__subtitle">
              Will my achievements and time in-game stats carry over to the EA
              app?
            </h3>
            <p className="faq__subtext">
              Yes. Any game that lists in-game hours or achievements will be
              carried over to the EA app. Head to a game page in the EA app to
              view your achievements and time spent in that game.
            </p>
          </div>
          <div className="faq__box">
            <h3 className="faq__subtitle">
              What will happen to my friends list?
            </h3>
            <p className="faq__subtext">
              Your Origin friends list automatically transfers over once you log
              in to the EA app, so you don’t have to worry about remembering all
              those player IDs.
            </p>
          </div>
          <div className="faq__box">
            <h3 className="faq__subtitle">
              What will happen to my in-game purchases?
            </h3>
            <p className="faq__subtext">
              Your in-game purchases will carry over when you log in to the EA
              app.
            </p>
          </div>
          <div className="faq__box">
            <h3 className="faq__subtitle">
              I use Origin on my Mac. What do I need to do?
            </h3>
            <p className="faq__subtext">
              Nothing at all. Origin for Mac is still the place to access and
              play your games.
            </p>
          </div>
          <div className="faq__box">
            <h3 className="faq__subtitle">
              If I play my EA games on Steam or Epic, do I need to download the
              EA app?
            </h3>
            <p className="faq__subtext">
              We will provide guidance directly through Steam about which app
              (the EA app or Origin) to download to ensure you can access & play
              your EA games.
            </p>
          </div>
          <div className="faq__box">
            <h3 className="faq__subtitle">
              I need some more help. Who can I contact?
            </h3>
            <p className="faq__subtext">
              You can{" "}
              <a href="#">
                <p className="red">contact us here.</p>
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQs;
