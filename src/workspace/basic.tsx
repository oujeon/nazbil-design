import {
  A,
  Abbr,
  Acronym,
  Address,
  Area,
  Article,
  Aside,
  Audio,
  B,
  Base,
  Bdi,
  Bdo,
  Big,
  Blockquote,
  Body,
  Br,
  Button,
  Canvas,
  Caption,
  Center,
  Cite,
  Code,
  Col,
  Colgroup,
  Data,
  Datalist,
  Dd,
  Del,
  Details,
  Dfn,
  Dialog,
  Dir,
  Div,
  Dl,
  Dt,
  Em,
  Embed,
  Fencedframe,
  Fieldset,
  Figcaption,
  Figure,
  Font,
  Footer,
  Form,
  Frame,
  Frameset,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Head,
  Header,
  Hgroup,
  Hr,
  Html,
  I,
  Iframe,
  Img,
  InputCheckbox,
  InputColor,
  InputDate,
  InputDatetimeLocal,
  InputEmail,
  InputFile,
  InputHidden,
  InputImage,
  InputMonth,
  InputNumber,
  InputPassword,
  InputRadio,
  InputRange,
  InputReset,
  InputSearch,
  InputSubmit,
  InputTel,
  InputText,
  InputTime,
  InputUrl,
  InputWeek,
  Ins,
  Kbd,
  Label,
  Legend,
  Li,
  Link,
  Main,
  Map,
  Mark,
  Marquee,
  Menu,
  Meta,
  Meter,
  Nav,
  Nobr,
  Noembed,
  Noframes,
  Noscript,
  Object,
  Ol,
  Optgroup,
  Option,
  Output,
  P,
  Param,
  Picture,
  Plaintext,
  Portal,
  Pre,
  Progress,
  Q,
  Rb,
  Rp,
  Rt,
  Rtc,
  Ruby,
  S,
  Samp,
  Script,
  Search,
  Section,
  Select,
  Slot,
  Small,
  Source,
  Span,
  Strike,
  Strong,
  Style,
  Sub,
  Summary,
  Sup,
  Table,
  Td,
  Template,
  Textarea,
  Tfoot,
  Th,
  Thead,
  Time,
  Title,
  Tr,
  Track,
  Tt,
  U,
  Ul,
  Var,
  Video,
  Wbr,
  Xmp,
} from "components/basic";

import React, { useRef, useState } from "react";

const Basic: React.FC = () => {
  const [subScreen, setSubScreen] = useState(<></>);

  const aRef = useRef<HTMLAnchorElement>();
  //
  function onMenu(menuId: string) {
    if (menuId === "A") {
      setSubScreen(
        <A
          href={"//www.google.com"}
          target={"_block"}
          text={"Google"}
          classes={"sample"}
          ref={aRef as React.Ref<HTMLAnchorElement>}
          inlineStyle={{ color: "red" }}
          onClick={() => {
            console.log(aRef.current);
            aRef.current?.classList.add("sample2");
            console.log(aRef.current?.className);
          }}
        />
      );
    }
    if (menuId === "Abbr") {
      setSubScreen(<Abbr text={"Abbr"} />);
    }
    if (menuId === "Acronym") {
      setSubScreen(<Acronym />);
    }
    if (menuId === "Address") {
      setSubScreen(
        <Address>
          <a href="//developer.mozilla.org">MDN</a>
        </Address>
      );
    }
    if (menuId === "Area") {
      setSubScreen(
        <>
          <map name="primary">
            <Area
              shape="circle"
              coords="75,75,75"
              href="left.html"
              alt="Click to go Left"
            />
            <Area
              shape="circle"
              coords="275,75,75"
              href="right.html"
              alt="Click to go Right"
            />
          </map>
          <img
            useMap="#primary"
            src="https://dummyimage.com/350x150"
            alt="350 x 150 pic"
          />
        </>
      );
    }
    if (menuId === "Article") {
      setSubScreen(
        <Article>
          <h2>03 March 2018</h2>
          <p>Rain.</p>
        </Article>
      );
    }
    if (menuId === "Aside") {
      setSubScreen(
        <Aside>
          <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
        </Aside>
      );
    }
    if (menuId === "Audio") {
      setSubScreen(
        <Audio src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" />
      );
    }
    if (menuId === "B") {
      setSubScreen(<B>The Bring Attention To element</B>);
    }
    if (menuId === "Base") {
      setSubScreen(
        <>
          <head>
            <Base target="_blank" href="https://www.w3schools.com/" />
          </head>
          <img
            src="images/stickman.gif"
            width="24"
            height="39"
            alt="Stickman"
          />
        </>
      );
    }
    if (menuId === "Bdi") {
      setSubScreen(<Bdi>The Bidirectional Isolate element</Bdi>);
    }
    if (menuId === "Bdo") {
      setSubScreen(<Bdo>The Bidirectional Text Override element</Bdo>);
    }
    if (menuId === "Big") {
      setSubScreen(<Big />);
    }
    if (menuId === "Blockquote") {
      setSubScreen(
        <Blockquote cite="https://datatracker.ietf.org/doc/html/rfc1149">
          <p>
            Words can be like X-rays, if you use them properly—they’ll go
            through anything. You read and you’re pierced.
          </p>
        </Blockquote>
      );
    }
    if (menuId === "Body") {
      setSubScreen(<Body />);
    }
    if (menuId === "Br") {
      setSubScreen(<Br />);
    }
    if (menuId === "Button") {
      setSubScreen(
        <Button
          type={"button"}
          onClick={() => {
            alert("button");
          }}
        >
          The Button element
        </Button>
      );
    }
    if (menuId === "Canvas") {
      setSubScreen(
        <Canvas width="150" height="150">
          The Graphics Canvas element
        </Canvas>
      );
    }
    if (menuId === "Caption") {
      setSubScreen(<Caption>The Table Caption element</Caption>);
    }
    if (menuId === "Center") {
      setSubScreen(<Center />);
    }
    if (menuId === "Cite") {
      setSubScreen(
        <Cite>
          <a href="http://www.george-orwell.org/1984/0.html">
            Nineteen Eighty-Four
          </a>
        </Cite>
      );
    }
    if (menuId === "Code") {
      setSubScreen(<Code>push()</Code>);
    }
    if (menuId === "Col") {
      setSubScreen(<Col />);
    }
    if (menuId === "Colgroup") {
      setSubScreen(<Colgroup />);
    }
    if (menuId === "Data") {
      setSubScreen(<Data />);
    }
    if (menuId === "Datalist") {
      setSubScreen(<Datalist />);
    }
    if (menuId === "Dd") {
      setSubScreen(<Dd />);
    }
    if (menuId === "Del") {
      setSubScreen(<Del />);
    }
    if (menuId === "Details") {
      setSubScreen(<Details />);
    }
    if (menuId === "Dfn") {
      setSubScreen(<Dfn />);
    }
    if (menuId === "Dialog") {
      setSubScreen(<Dialog />);
    }
    if (menuId === "Dir") {
      setSubScreen(<Dir />);
    }
    if (menuId === "Div") {
      setSubScreen(<Div />);
    }
    if (menuId === "Dl") {
      setSubScreen(<Dl />);
    }
    if (menuId === "Dt") {
      setSubScreen(<Dt />);
    }
    if (menuId === "Em") {
      setSubScreen(<Em />);
    }
    if (menuId === "Embed") {
      setSubScreen(<Embed />);
    }
    if (menuId === "Fencedframe") {
      setSubScreen(<Fencedframe />);
    }
    if (menuId === "Fieldset") {
      setSubScreen(<Fieldset />);
    }
    if (menuId === "Figcaption") {
      setSubScreen(<Figcaption />);
    }
    if (menuId === "Figure") {
      setSubScreen(<Figure />);
    }
    if (menuId === "Font") {
      setSubScreen(<Font />);
    }
    if (menuId === "Footer") {
      setSubScreen(<Footer />);
    }
    if (menuId === "Form") {
      setSubScreen(<Form />);
    }
    if (menuId === "Frame") {
      setSubScreen(<Frame />);
    }
    if (menuId === "Frameset") {
      setSubScreen(<Frameset />);
    }
    if (menuId === "H1") {
      setSubScreen(<H1 />);
    }
    if (menuId === "H2") {
      setSubScreen(<H2 />);
    }
    if (menuId === "H3") {
      setSubScreen(<H3 />);
    }
    if (menuId === "H4") {
      setSubScreen(<H4 />);
    }
    if (menuId === "H5") {
      setSubScreen(<H5 />);
    }
    if (menuId === "H6") {
      setSubScreen(<H6 />);
    }
    if (menuId === "Head") {
      setSubScreen(<Head />);
    }
    if (menuId === "Header") {
      setSubScreen(<Header />);
    }
    if (menuId === "Hgroup") {
      setSubScreen(<Hgroup />);
    }
    if (menuId === "Hr") {
      setSubScreen(<Hr />);
    }
    if (menuId === "Html") {
      setSubScreen(<Html />);
    }
    if (menuId === "I") {
      setSubScreen(<I />);
    }
    if (menuId === "Iframe") {
      setSubScreen(<Iframe />);
    }
    if (menuId === "Img") {
      setSubScreen(<Img />);
    }
    if (menuId === "InputCheckbox") {
      setSubScreen(<InputCheckbox />);
    }
    if (menuId === "InputColor") {
      setSubScreen(<InputColor />);
    }
    if (menuId === "InputDate") {
      setSubScreen(<InputDate />);
    }
    if (menuId === "InputDatetimeLocal") {
      setSubScreen(<InputDatetimeLocal />);
    }
    if (menuId === "InputEmail") {
      setSubScreen(<InputEmail />);
    }
    if (menuId === "InputFile") {
      setSubScreen(<InputFile />);
    }
    if (menuId === "InputHidden") {
      setSubScreen(<InputHidden />);
    }
    if (menuId === "InputImage") {
      setSubScreen(<InputImage />);
    }
    if (menuId === "InputMonth") {
      setSubScreen(<InputMonth />);
    }
    if (menuId === "InputNumber") {
      setSubScreen(<InputNumber />);
    }
    if (menuId === "InputPassword") {
      setSubScreen(<InputPassword />);
    }
    if (menuId === "InputRadio") {
      setSubScreen(<InputRadio />);
    }
    if (menuId === "InputRange") {
      setSubScreen(<InputRange />);
    }
    if (menuId === "InputReset") {
      setSubScreen(<InputReset />);
    }
    if (menuId === "InputSearch") {
      setSubScreen(<InputSearch />);
    }
    if (menuId === "InputSubmit") {
      setSubScreen(<InputSubmit />);
    }
    if (menuId === "InputTel") {
      setSubScreen(<InputTel />);
    }
    if (menuId === "InputText") {
      setSubScreen(<InputText />);
    }
    if (menuId === "InputTime") {
      setSubScreen(<InputTime />);
    }
    if (menuId === "InputUrl") {
      setSubScreen(<InputUrl />);
    }
    if (menuId === "InputWeek") {
      setSubScreen(<InputWeek />);
    }
    if (menuId === "Ins") {
      setSubScreen(<Ins />);
    }
    if (menuId === "Kbd") {
      setSubScreen(<Kbd />);
    }
    if (menuId === "Label") {
      setSubScreen(<Label />);
    }
    if (menuId === "Legend") {
      setSubScreen(<Legend />);
    }
    if (menuId === "Li") {
      setSubScreen(<Li />);
    }
    if (menuId === "Link") {
      setSubScreen(<Link />);
    }
    if (menuId === "Main") {
      setSubScreen(<Main />);
    }
    if (menuId === "Map") {
      setSubScreen(<Map />);
    }
    if (menuId === "Mark") {
      setSubScreen(<Mark />);
    }
    if (menuId === "Marquee") {
      setSubScreen(<Marquee />);
    }
    if (menuId === "Menu") {
      setSubScreen(<Menu />);
    }
    if (menuId === "Meta") {
      setSubScreen(<Meta />);
    }
    if (menuId === "Meter") {
      setSubScreen(<Meter />);
    }
    if (menuId === "Nav") {
      setSubScreen(<Nav />);
    }
    if (menuId === "Nobr") {
      setSubScreen(<Nobr />);
    }
    if (menuId === "Noembed") {
      setSubScreen(<Noembed />);
    }
    if (menuId === "Noframes") {
      setSubScreen(<Noframes />);
    }
    if (menuId === "Noscript") {
      setSubScreen(<Noscript />);
    }
    if (menuId === "Object") {
      setSubScreen(<Object />);
    }
    if (menuId === "Ol") {
      setSubScreen(<Ol />);
    }
    if (menuId === "Optgroup") {
      setSubScreen(<Optgroup />);
    }
    if (menuId === "Option") {
      setSubScreen(<Option />);
    }
    if (menuId === "Output") {
      setSubScreen(<Output />);
    }
    if (menuId === "P") {
      setSubScreen(<P />);
    }
    if (menuId === "Param") {
      setSubScreen(<Param />);
    }
    if (menuId === "Picture") {
      setSubScreen(<Picture />);
    }
    if (menuId === "Plaintext") {
      setSubScreen(<Plaintext />);
    }
    if (menuId === "Portal") {
      setSubScreen(<Portal />);
    }
    if (menuId === "Pre") {
      setSubScreen(<Pre />);
    }
    if (menuId === "Progress") {
      setSubScreen(<Progress />);
    }
    if (menuId === "Q") {
      setSubScreen(<Q />);
    }
    if (menuId === "Rb") {
      setSubScreen(<Rb />);
    }
    if (menuId === "Rp") {
      setSubScreen(<Rp />);
    }
    if (menuId === "Rt") {
      setSubScreen(<Rt />);
    }
    if (menuId === "Rtc") {
      setSubScreen(<Rtc />);
    }
    if (menuId === "Ruby") {
      setSubScreen(<Ruby />);
    }
    if (menuId === "S") {
      setSubScreen(<S />);
    }
    if (menuId === "Samp") {
      setSubScreen(<Samp />);
    }
    if (menuId === "Script") {
      setSubScreen(<Script />);
    }
    if (menuId === "Search") {
      setSubScreen(<Search />);
    }
    if (menuId === "Section") {
      setSubScreen(<Section />);
    }
    if (menuId === "Select") {
      setSubScreen(<Select />);
    }
    if (menuId === "Slot") {
      setSubScreen(<Slot />);
    }
    if (menuId === "Small") {
      setSubScreen(<Small />);
    }
    if (menuId === "Source") {
      setSubScreen(<Source />);
    }
    if (menuId === "Span") {
      setSubScreen(<Span />);
    }
    if (menuId === "Strike") {
      setSubScreen(<Strike />);
    }
    if (menuId === "Strong") {
      setSubScreen(<Strong />);
    }
    if (menuId === "Style") {
      setSubScreen(<Style />);
    }
    if (menuId === "Sub") {
      setSubScreen(<Sub />);
    }
    if (menuId === "Summary") {
      setSubScreen(<Summary />);
    }
    if (menuId === "Sup") {
      setSubScreen(<Sup />);
    }
    if (menuId === "Table") {
      setSubScreen(<Table />);
    }
    if (menuId === "Td") {
      setSubScreen(<Td />);
    }
    if (menuId === "Template") {
      setSubScreen(<Template />);
    }
    if (menuId === "Textarea") {
      setSubScreen(<Textarea />);
    }
    if (menuId === "Tfoot") {
      setSubScreen(<Tfoot />);
    }
    if (menuId === "Th") {
      setSubScreen(<Th />);
    }
    if (menuId === "Thead") {
      setSubScreen(<Thead />);
    }
    if (menuId === "Time") {
      setSubScreen(<Time />);
    }
    if (menuId === "Title") {
      setSubScreen(<Title />);
    }
    if (menuId === "Tr") {
      setSubScreen(<Tr />);
    }
    if (menuId === "Track") {
      setSubScreen(<Track />);
    }
    if (menuId === "Tt") {
      setSubScreen(<Tt />);
    }
    if (menuId === "U") {
      setSubScreen(<U />);
    }
    if (menuId === "Ul") {
      setSubScreen(<Ul />);
    }
    if (menuId === "Var") {
      setSubScreen(<Var />);
    }
    if (menuId === "Video") {
      setSubScreen(<Video />);
    }
    if (menuId === "Wbr") {
      setSubScreen(<Wbr />);
    }
    if (menuId === "Xmp") {
      setSubScreen(<Xmp />);
    }
  }

  return (
    <>
      <div
        id="left_container"
        className="menu_box"
        style={{ overflowX: "hidden", overflowY: "auto" }}
      >
        <div className="menu_box">
          <h1>Basic</h1>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("A");
            }}
          >
            A
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Abbr");
            }}
          >
            Abbr
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Acronym");
            }}
          >
            Acronym
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Address");
            }}
          >
            Address
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Area");
            }}
          >
            Area
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Article");
            }}
          >
            Article
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Aside");
            }}
          >
            Aside
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Audio");
            }}
          >
            Audio
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("B");
            }}
          >
            B
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Base");
            }}
          >
            Base
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Bdi");
            }}
          >
            Bdi
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Bdo");
            }}
          >
            Bdo
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Big");
            }}
          >
            Big
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Blockquote");
            }}
          >
            Blockquote
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Body");
            }}
          >
            Body
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Br");
            }}
          >
            Br
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Button");
            }}
          >
            Button
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Canvas");
            }}
          >
            Canvas
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Caption");
            }}
          >
            Caption
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Center");
            }}
          >
            Center
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Cite");
            }}
          >
            Cite
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Code");
            }}
          >
            Code
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Col");
            }}
          >
            Col
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Colgroup");
            }}
          >
            Colgroup
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Data");
            }}
          >
            Data
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Datalist");
            }}
          >
            Datalist
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Dd");
            }}
          >
            Dd
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Del");
            }}
          >
            Del
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Details");
            }}
          >
            Details
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Dfn");
            }}
          >
            Dfn
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Dialog");
            }}
          >
            Dialog
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Dir");
            }}
          >
            Dir
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Div");
            }}
          >
            Div
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Dl");
            }}
          >
            Dl
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Dt");
            }}
          >
            Dt
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Em");
            }}
          >
            Em
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Embed");
            }}
          >
            Embed
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Fencedframe");
            }}
          >
            Fencedframe
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Fieldset");
            }}
          >
            Fieldset
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Figcaption");
            }}
          >
            Figcaption
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Figure");
            }}
          >
            Figure
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Font");
            }}
          >
            Font
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Footer");
            }}
          >
            Footer
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Form");
            }}
          >
            Form
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Frame");
            }}
          >
            Frame
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Frameset");
            }}
          >
            Frameset
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("H1");
            }}
          >
            H1
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("H2");
            }}
          >
            H2
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("H3");
            }}
          >
            H3
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("H4");
            }}
          >
            H4
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("H5");
            }}
          >
            H5
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("H6");
            }}
          >
            H6
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Head");
            }}
          >
            Head
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Header");
            }}
          >
            Header
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Hgroup");
            }}
          >
            Hgroup
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Hr");
            }}
          >
            Hr
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Html");
            }}
          >
            Html
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("I");
            }}
          >
            I
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("BasIframeic");
            }}
          >
            Iframe
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Img");
            }}
          >
            Img
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputCheckbox");
            }}
          >
            InputCheckbox
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputColor");
            }}
          >
            InputColor
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("BasInputDateic");
            }}
          >
            InputDate
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputDatetimeLocal");
            }}
          >
            InputDatetimeLocal
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputEmail");
            }}
          >
            InputEmail
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputFile");
            }}
          >
            InputFile
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputHidden");
            }}
          >
            InputHidden
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputImage");
            }}
          >
            InputImage
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputMonth");
            }}
          >
            InputMonth
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputNumber");
            }}
          >
            InputNumber
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputPassword");
            }}
          >
            InputPassword
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputRadio");
            }}
          >
            InputRadio
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputRange");
            }}
          >
            InputRange
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputReset");
            }}
          >
            InputReset
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputSearch");
            }}
          >
            InputSearch
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputSubmit");
            }}
          >
            InputSubmit
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputTel");
            }}
          >
            InputTel
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputText");
            }}
          >
            InputText
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputTime");
            }}
          >
            InputTime
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputUrl");
            }}
          >
            InputUrl
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("InputWeek");
            }}
          >
            InputWeek
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Ins");
            }}
          >
            Ins
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("BasiKbdc");
            }}
          >
            Kbd
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Label");
            }}
          >
            Label
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Legend");
            }}
          >
            Legend
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Li");
            }}
          >
            Li
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Link");
            }}
          >
            Link
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Main");
            }}
          >
            Main
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Map");
            }}
          >
            Map
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Mark");
            }}
          >
            Mark
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Marquee");
            }}
          >
            Marquee
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Menu");
            }}
          >
            Menu
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Meta");
            }}
          >
            Meta
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Meter");
            }}
          >
            Meter
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Nav");
            }}
          >
            Nav
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Nobr");
            }}
          >
            Nobr
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Noembed");
            }}
          >
            Noembed
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Noframes");
            }}
          >
            Noframes
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Noscript");
            }}
          >
            Noscript
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Object");
            }}
          >
            Object
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Ol");
            }}
          >
            Ol
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Optgroup");
            }}
          >
            Optgroup
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Option");
            }}
          >
            Option
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Output");
            }}
          >
            Output
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("P");
            }}
          >
            P
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Param");
            }}
          >
            Param
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Picture");
            }}
          >
            Picture
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Plaintext");
            }}
          >
            Plaintext
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Portal");
            }}
          >
            Portal
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Pre");
            }}
          >
            Pre
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Progress");
            }}
          >
            Progress
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Q");
            }}
          >
            Q
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Rb");
            }}
          >
            Rb
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Rp");
            }}
          >
            Rp
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Rt");
            }}
          >
            Rt
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Rtc");
            }}
          >
            Rtc
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Ruby");
            }}
          >
            Ruby
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("S");
            }}
          >
            S
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Samp");
            }}
          >
            Samp
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Script");
            }}
          >
            Script
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Search");
            }}
          >
            Search
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Section");
            }}
          >
            Section
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Select");
            }}
          >
            Select
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Slot");
            }}
          >
            Slot
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Small");
            }}
          >
            Small
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Source");
            }}
          >
            Source
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Span");
            }}
          >
            Span
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Strike");
            }}
          >
            Strike
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Strong");
            }}
          >
            Strong
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Style");
            }}
          >
            Style
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Sub");
            }}
          >
            Sub
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Summary");
            }}
          >
            Summary
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Sup");
            }}
          >
            Sup
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Table");
            }}
          >
            Table
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Td");
            }}
          >
            Td
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Template");
            }}
          >
            Template
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Textarea");
            }}
          >
            Textarea
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Tfoot");
            }}
          >
            Tfoot
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Th");
            }}
          >
            Th
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Thead");
            }}
          >
            Thead
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Time");
            }}
          >
            Time
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Title");
            }}
          >
            Title
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Tr");
            }}
          >
            Tr
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Track");
            }}
          >
            Track
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Tt");
            }}
          >
            Tt
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("U");
            }}
          >
            U
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Ul");
            }}
          >
            Ul
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Var");
            }}
          >
            Var
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Video");
            }}
          >
            Video
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Wbr");
            }}
          >
            Wbr
          </button>
        </div>
        <div className="menu_box">
          <button
            style={{ width: "150px" }}
            onClick={() => {
              onMenu("Xmp");
            }}
          >
            Xmp
          </button>
        </div>
      </div>
      <div id="right_container">{subScreen}</div>
    </>
  );
};

export default Basic;
