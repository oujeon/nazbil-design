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
  Input,
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
  Source,
  Span,
  Strike,
  Strong,
  Style,
  Sub,
  Summary,
  Sup,
  Table,
  Tbody,
  Td,
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
      setSubScreen(<Data value="398">Mini Ketchup</Data>);
    }
    if (menuId === "Datalist") {
      setSubScreen(
        <>
          <label htmlFor="ice-cream-choice">Choose a flavor:</label>
          <input
            list="ice-cream-flavors"
            id="ice-cream-choice"
            name="ice-cream-choice"
          />
          <Datalist id="ice-cream-flavors">
            <option value="Chocolate"></option>
            <option value="Coconut"></option>
            <option value="Mint"></option>
            <option value="Strawberry"></option>
            <option value="Vanilla"></option>
          </Datalist>
        </>
      );
    }
    if (menuId === "Dd") {
      setSubScreen(<Dd />);
    }
    if (menuId === "Del") {
      setSubScreen(<Del>The Deleted Text element</Del>);
    }
    if (menuId === "Details") {
      setSubScreen(
        <Details>
          <summary>System Requirements</summary>
          <p>
            Requires a computer running an operating system. The computer must
            have some memory and ideally some kind of long-term storage. An
            input device as well as some form of output device is recommended.
          </p>
        </Details>
      );
    }
    if (menuId === "Dfn") {
      setSubScreen(<Dfn>The Definition element</Dfn>);
    }
    if (menuId === "Dialog") {
      setSubScreen(
        <Dialog>
          <p>Greetings, one and all!</p>
          <form method="dialog">
            <button>OK</button>
          </form>
        </Dialog>
      );
    }
    if (menuId === "Dir") {
      setSubScreen(<Dir />);
    }
    if (menuId === "Div") {
      setSubScreen(<Div>The Content Division element</Div>);
    }
    if (menuId === "Dl") {
      setSubScreen(
        <Dl>
          <dt>Beast of Bodmin</dt>
          <dd>A large feline inhabiting Bodmin Moor.</dd>

          <dt>Morgawr</dt>
          <dd>A sea serpent.</dd>

          <dt>Owlman</dt>
          <dd>A giant owl-like creature.</dd>
        </Dl>
      );
    }
    if (menuId === "Dt") {
      setSubScreen(
        <dl>
          <Dt> Denim (semigloss finish)</Dt>
          <dd>Ceiling</dd>
        </dl>
      );
    }
    if (menuId === "Em") {
      setSubScreen(<Em>The Emphasis element</Em>);
    }
    if (menuId === "Embed") {
      setSubScreen(
        <Embed
          type="video/webm"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          width="250"
          height="200"
        />
      );
    }
    if (menuId === "Fencedframe") {
      setSubScreen(<Fencedframe />);
    }
    if (menuId === "Fieldset") {
      setSubScreen(
        <Fieldset>
          <legend>Choose your favorite monster</legend>
          <input type="radio" id="kraken" name="monster" value="K" />
          <label htmlFor="kraken">Kraken</label>
          <br />
          <input type="radio" id="sasquatch" name="monster" value="S" />
          <label htmlFor="sasquatch">Sasquatch</label>
          <br />
          <input type="radio" id="mothman" name="monster" value="M" />
          <label htmlFor="mothman">Mothman</label>
        </Fieldset>
      );
    }
    if (menuId === "Figcaption") {
      setSubScreen(
        <figure>
          <img
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
            alt="Elephant at sunset"
          />
          <Figcaption>An elephant at sunset</Figcaption>
        </figure>
      );
    }
    if (menuId === "Figure") {
      setSubScreen(
        <Figure>
          <img
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
            alt="Elephant at sunset"
          />
          <Figcaption>An elephant at sunset</Figcaption>
        </Figure>
      );
    }
    if (menuId === "Font") {
      setSubScreen(<Font />);
    }
    if (menuId === "Footer") {
      setSubScreen(
        <article>
          <h1>How to be a wizard</h1>
          <ol>
            <li>Grow a long, majestic beard.</li>
            <li>Wear a tall, pointed hat.</li>
            <li>Have I mentioned the beard?</li>
          </ol>
          <Footer>
            <p>© 2018 Gandalf</p>
          </Footer>
        </article>
      );
    }
    if (menuId === "Form") {
      setSubScreen(
        <Form action="" method="get">
          <div>
            <label htmlFor="name">Enter your name: </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Enter your email: </label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <input type="submit" value="Subscribe!" />
          </div>
        </Form>
      );
    }
    if (menuId === "Frame") {
      setSubScreen(<Frame />);
    }
    if (menuId === "Frameset") {
      setSubScreen(<Frameset />);
    }
    if (menuId === "H1") {
      setSubScreen(<H1>The HTML Section Heading elements</H1>);
    }
    if (menuId === "H2") {
      setSubScreen(<H2>The HTML Section Heading elements</H2>);
    }
    if (menuId === "H3") {
      setSubScreen(<H3>The HTML Section Heading elements</H3>);
    }
    if (menuId === "H4") {
      setSubScreen(<H4>The HTML Section Heading elements</H4>);
    }
    if (menuId === "H5") {
      setSubScreen(<H5>The HTML Section Heading elements</H5>);
    }
    if (menuId === "H6") {
      setSubScreen(<H6>The HTML Section Heading elements</H6>);
    }
    if (menuId === "Head") {
      setSubScreen(
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          <title>Document title</title>
        </Head>
      );
    }
    if (menuId === "Header") {
      setSubScreen(
        <Header>
          <a href="#">Cute Puppies Express!</a>
        </Header>
      );
    }
    if (menuId === "Hgroup") {
      setSubScreen(
        <Hgroup>
          <h1>Frankenstein</h1>
          <p>Or: The Modern Prometheus</p>
        </Hgroup>
      );
    }
    if (menuId === "Hr") {
      setSubScreen(
        <>
          <p>
            §1: The first rule of Fight Club is: You do not talk about Fight
            Club.
          </p>

          <Hr />

          <p>§2: The second rule of Fight Club is: Always bring cupcakes.</p>
        </>
      );
    }
    if (menuId === "Html") {
      setSubScreen(<Html />);
    }
    if (menuId === "I") {
      setSubScreen(
        <p>
          I looked at it and thought <I>This can't be real!</I>
        </p>
      );
    }
    if (menuId === "Iframe") {
      setSubScreen(
        <Iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="300"
          height="200"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
        ></Iframe>
      );
    }
    if (menuId === "Img") {
      setSubScreen(
        <Img
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
          alt="Grapefruit slice atop a pile of other slices"
        />
      );
    }
    if (menuId === "Input") {
      setSubScreen(<Input />);
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
      setSubScreen(
        <>
          <p>“You're late!”</p>
          <del>
            <p>“I apologize for the delay.”</p>
          </del>
          <Ins cite="../howtobeawizard.html">
            <p>“A wizard is never late …”</p>
          </Ins>
        </>
      );
    }
    if (menuId === "Kbd") {
      setSubScreen(
        <p>
          Please press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> to
          re-render an MDN page.
        </p>
      );
    }
    if (menuId === "Label") {
      setSubScreen(
        <div>
          <Label htmlFor="cheese">Do you like cheese?</Label>
          <input type="checkbox" name="cheese" id="cheese" />
        </div>
      );
    }
    if (menuId === "Legend") {
      setSubScreen(
        <fieldset>
          <Legend>Choose your favorite monster</Legend>

          <input type="radio" id="kraken" name="monster" value="K" />
          <label htmlFor="kraken">Kraken</label>
          <br />

          <input type="radio" id="sasquatch" name="monster" value="S" />
          <label htmlFor="sasquatch">Sasquatch</label>
          <br />

          <input type="radio" id="mothman" name="monster" value="M" />
          <label htmlFor="mothman">Mothman</label>
        </fieldset>
      );
    }
    if (menuId === "Li") {
      setSubScreen(
        <ul>
          <Li>Neil Armstrong</Li>
          <Li>Alan Bean</Li>
          <Li>Peter Conrad</Li>
          <Li>Edgar Mitchell</Li>
          <Li>Alan Shepard</Li>
        </ul>
      );
    }
    if (menuId === "Link") {
      setSubScreen(<Link />);
    }
    if (menuId === "Main") {
      setSubScreen(
        <>
          <header>Gecko facts</header>

          <main>
            <p>
              Geckos are a group of usually small, usually nocturnal lizards.
              They are found on every continent except Antarctica.
            </p>

            <p>
              Many species of gecko have adhesive toe pads which enable them to
              climb walls and even windows.
            </p>
          </main>
        </>
      );
    }
    if (menuId === "Map") {
      setSubScreen(
        <>
          <map name="infographic">
            <area
              shape="poly"
              coords="130,147,200,107,254,219,130,228"
              href="https://developer.mozilla.org/docs/Web/HTML"
              target="_blank"
              alt="HTML"
            />
            <area
              shape="poly"
              coords="130,147,130,228,6,219,59,107"
              href="https://developer.mozilla.org/docs/Web/CSS"
              target="_blank"
              alt="CSS"
            />
            <area
              shape="poly"
              coords="130,147,200,107,130,4,59,107"
              href="https://developer.mozilla.org/docs/Web/JavaScript"
              target="_blank"
              alt="JavaScript"
            />
          </map>
          <img
            useMap="#infographic"
            src="https://interactive-examples.mdn.mozilla.net/media/examples/mdn-info2.png"
            alt="MDN infographic"
          />
        </>
      );
    }
    if (menuId === "Mark") {
      setSubScreen(
        <>
          <p>Search results for "salamander":</p>

          <hr />

          <p>
            Several species of <Mark>salamander</Mark> inhabit the temperate
            rainforest of the Pacific Northwest.
          </p>

          <p>
            Most <Mark>salamander</Mark>s are nocturnal, and hunt for insects,
            worms, and other small creatures.
          </p>
        </>
      );
    }
    if (menuId === "Marquee") {
      setSubScreen(<Marquee />);
    }
    if (menuId === "Menu") {
      setSubScreen(
        <div>
          <a href="#">
            NASA’s Webb Delivers Deepest Infrared Image of Universe Yet
          </a>
          <Menu>
            <li>
              <button id="save">Save for later</button>
            </li>
            <li>
              <button id="share">Share this news</button>
            </li>
          </Menu>
        </div>
      );
    }
    if (menuId === "Meta") {
      setSubScreen(<Meta />);
    }
    if (menuId === "Meter") {
      setSubScreen(
        <>
          <label htmlFor="fuel">Fuel level:</label>

          <Meter
            id="fuel"
            min="0"
            max="100"
            low={33}
            high={66}
            optimum={80}
            value="50"
          >
            at 50/100
          </Meter>
        </>
      );
    }
    if (menuId === "Nav") {
      setSubScreen(
        <>
          <Nav>
            <ol>
              <li>
                <a href="#">Bikes</a>
              </li>
              <li>
                <a href="#">BMX</a>
              </li>
              <li>Jump Bike 3000</li>
            </ol>
          </Nav>

          <h1>Jump Bike 3000</h1>
          <p>
            This BMX bike is a solid step into the pro world. It looks as legit
            as it rides and is built to polish your skills.
          </p>
        </>
      );
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
      setSubScreen(
        <Noscript>
          <a href="https://www.mozilla.org/">External Link</a>
        </Noscript>
      );
    }
    if (menuId === "Object") {
      setSubScreen(
        <Object
          type="video/mp4"
          data="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          width="250"
          height="200"
        ></Object>
      );
    }
    if (menuId === "Ol") {
      setSubScreen(
        <Ol>
          <li>Mix flour, baking powder, sugar, and salt.</li>
          <li>In another bowl, mix eggs, milk, and oil.</li>
          <li>Stir both mixtures together.</li>
          <li>Fill muffin tray 3/4 full.</li>
          <li>Bake for 20 minutes.</li>
        </Ol>
      );
    }
    if (menuId === "Optgroup") {
      setSubScreen(
        <>
          <label htmlFor="dino-select">Choose a dinosaur:</label>
          <select id="dino-select">
            <Optgroup label="Theropods">
              <option>Tyrannosaurus</option>
              <option>Velociraptor</option>
              <option>Deinonychus</option>
            </Optgroup>
            <Optgroup label="Sauropods">
              <option>Diplodocus</option>
              <option>Saltasaurus</option>
              <option>Apatosaurus</option>
            </Optgroup>
          </select>
        </>
      );
    }
    if (menuId === "Option") {
      setSubScreen(
        <>
          <label htmlFor="pet-select">Choose a pet:</label>

          <select id="pet-select">
            <Option value="">--Please choose an option--</Option>
            <Option value="dog">Dog</Option>
            <Option value="cat">Cat</Option>
            <Option value="hamster">Hamster</Option>
            <Option value="parrot">Parrot</Option>
            <Option value="spider">Spider</Option>
            <Option value="goldfish">Goldfish</Option>
          </select>
        </>
      );
    }
    if (menuId === "Output") {
      setSubScreen(
        <form>
          <input type="range" id="b" name="b" value="50" /> +
          <input type="number" id="a" name="a" value="10" /> =
          <Output name="result" htmlFor="a b">
            60
          </Output>
        </form>
      );
    }
    if (menuId === "P") {
      setSubScreen(
        <>
          <P>
            Geckos are a group of usually small, usually nocturnal lizards. They
            are found on every continent except Antarctica.
          </P>

          <P>
            Some species live in houses where they hunt insects attracted by
            artificial light.
          </P>
        </>
      );
    }
    if (menuId === "Param") {
      setSubScreen(<Param />);
    }
    if (menuId === "Picture") {
      setSubScreen(
        <Picture>
          <source
            srcSet="/media/cc0-images/surfer-240-200.jpg"
            media="(orientation: portrait)"
          />
          <img
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/surfer-240-200.jpg"
            alt=""
          />
        </Picture>
      );
    }
    if (menuId === "Plaintext") {
      setSubScreen(<Plaintext />);
    }
    if (menuId === "Portal") {
      setSubScreen(<Portal />);
    }
    if (menuId === "Pre") {
      setSubScreen(
        <Pre>
          L TE A A C V R A DOU LOU REUSE QUE TU PORTES ET QUI T' ORNE O CI
          VILISÉ OTE- TU VEUX LA BIEN SI RESPI RER - Apollinaire
        </Pre>
      );
    }
    if (menuId === "Progress") {
      setSubScreen(
        <Progress id="file" max="100" value="70">
          70%
        </Progress>
      );
    }
    if (menuId === "Q") {
      setSubScreen(
        <p>
          When Dave asks HAL to open the pod bay door, HAL answers:
          <Q cite="https://www.imdb.com/title/tt0062622/quotes/?item=qt0396921&ref_=ext_shr_lnk">
            I'm sorry, Dave. I'm afraid I can't do that.
          </Q>
        </p>
      );
    }
    if (menuId === "Rb") {
      setSubScreen(<Rb />);
    }
    if (menuId === "Rp") {
      setSubScreen(
        <ruby>
          漢 <Rp>(</Rp>
          <rt>kan</rt>
          <Rp>)</Rp> 字 <Rp>(</Rp>
          <rt>ji</rt>
          <Rp>)</Rp>
        </ruby>
      );
    }
    if (menuId === "Rt") {
      setSubScreen(
        <ruby>
          漢 <rp>(</rp>
          <Rt>kan</Rt>
          <rp>)</rp> 字 <rp>(</rp>
          <Rt>ji</Rt>
          <rp>)</rp>
        </ruby>
      );
    }
    if (menuId === "Rtc") {
      setSubScreen(<Rtc />);
    }
    if (menuId === "Ruby") {
      setSubScreen(
        <Ruby>
          明日 <rp>(</rp>
          <rt>Ashita</rt>
          <rp>)</rp>
        </Ruby>
      );
    }
    if (menuId === "S") {
      setSubScreen(
        <>
          <p>
            <S>
              There will be a few tickets available at the box office tonight.
            </S>
          </p>

          <p>SOLD OUT!</p>
        </>
      );
    }
    if (menuId === "Samp") {
      setSubScreen(
        <>
          <p>
            I was trying to boot my computer, but I got this hilarious message:
          </p>

          <p>
            <Samp>
              Keyboard not found <br />
              Press F1 to continue
            </Samp>
          </p>
        </>
      );
    }
    if (menuId === "Script") {
      setSubScreen(<Script />);
    }
    if (menuId === "Search") {
      setSubScreen(
        <header>
          <h1>Movie website</h1>
          <Search>
            <form action="./search/">
              <label htmlFor="movie">Find a Movie</label>
              <input type="search" id="movie" name="q" />
              <button type="submit">Search</button>
            </form>
          </Search>
        </header>
      );
    }
    if (menuId === "Section") {
      setSubScreen(
        <>
          <h1>Choosing an Apple</h1>
          <Section>
            <h2>Introduction</h2>
            <p>
              This document provides a guide to help with the important task of
              choosing the correct Apple.
            </p>
          </Section>

          <Section>
            <h2>Criteria</h2>
            <p>
              There are many different criteria to be considered when choosing
              an Apple — size, color, firmness, sweetness, tartness...
            </p>
          </Section>
        </>
      );
    }
    if (menuId === "Select") {
      setSubScreen(
        <>
          <label htmlFor="pet-select">Choose a pet:</label>

          <Select name="pets" id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </Select>
        </>
      );
    }
    if (menuId === "Slot") {
      setSubScreen(
        <div>
          <h4>Attributes</h4>
          <Slot name="attributes">
            <p>None</p>
          </Slot>
        </div>
      );
    }
    if (menuId === "Small") {
      setSubScreen(
        <>
          <p>
            MDN Web Docs is a learning platform for Web technologies and the
            software that powers the Web.
          </p>

          <hr />

          <p>
            <small>
              The content is licensed under a Creative Commons
              Attribution-ShareAlike 2.5 Generic License.
            </small>
          </p>
        </>
      );
    }
    if (menuId === "Source") {
      setSubScreen(
        <video controls width="250" height="200" muted>
          <Source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
            type="video/webm"
          />
          <Source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
            type="video/mp4"
          />
          Download the
          <a href="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm">
            WEBM
          </a>
          or
          <a href="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm">
            MP4
          </a>
          video.
        </video>
      );
    }
    if (menuId === "Span") {
      setSubScreen(
        <>
          <p>
            Add the <Span>basil</Span>, <Span>pine nuts</Span> and
            <Span>garlic</Span> to a blender and blend into a paste.
          </p>

          <p>
            Gradually add the <Span>olive oil</Span> while running the blender
            slowly.
          </p>
        </>
      );
    }
    if (menuId === "Strike") {
      setSubScreen(<Strike />);
    }
    if (menuId === "Strong") {
      setSubScreen(
        <p>
          ... the most important rule, the rule you can never forget, no matter
          how much he cries, no matter how much he begs:
          <Strong>never feed him after midnight</Strong>.
        </p>
      );
    }
    if (menuId === "Style") {
      setSubScreen(<Style />);
    }
    if (menuId === "Sub") {
      setSubScreen(
        <p>
          Almost every developer's favorite molecule is C<Sub>8</Sub>H
          <Sub>10</Sub>N<Sub>4</Sub>O<Sub>2</Sub>, also known as "caffeine."
        </p>
      );
    }
    if (menuId === "Summary") {
      setSubScreen(
        <details>
          <Summary>
            I have keys but no doors. I have space but no room. You can enter
            but can’t leave. What am I?
          </Summary>
          A keyboard.
        </details>
      );
    }
    if (menuId === "Sup") {
      setSubScreen(
        <>
          <p>
            The <em>Pythagorean theorem</em> is often expressed as the following
            equation:
          </p>

          <p>
            <var>
              a<Sup>2</Sup>
            </var>
            +
            <var>
              b<Sup>2</Sup>
            </var>
            =
            <var>
              c<Sup>2</Sup>
            </var>
          </p>
        </>
      );
    }
    if (menuId === "Table") {
      setSubScreen(
        <Table>
          <caption>Front-end web developer course 2021</caption>
          <thead>
            <tr>
              <th scope="col">Person</th>
              <th scope="col">Most interest in</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Chris</th>
              <td>HTML tables</td>
              <td>22</td>
            </tr>
            <tr>
              <th scope="row">Dennis</th>
              <td>Web accessibility</td>
              <td>45</td>
            </tr>
            <tr>
              <th scope="row">Sarah</th>
              <td>JavaScript frameworks</td>
              <td>29</td>
            </tr>
            <tr>
              <th scope="row">Karen</th>
              <td>Web performance</td>
              <td>36</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan={2}>
                Average age
              </th>
              <td>33</td>
            </tr>
          </tfoot>
        </Table>
      );
    }

    if (menuId === "Tbody") {
      setSubScreen(
        <table>
          <caption>Council budget (in £) 2018</caption>
          <thead>
            <tr>
              <th scope="col">Items</th>
              <th scope="col">Expenditure</th>
            </tr>
          </thead>
          <Tbody>
            <tr>
              <th scope="row">Donuts</th>
              <td>3,000</td>
            </tr>
            <tr>
              <th scope="row">Stationery</th>
              <td>18,000</td>
            </tr>
          </Tbody>
          <tfoot>
            <tr>
              <th scope="row">Totals</th>
              <td>21,000</td>
            </tr>
          </tfoot>
        </table>
      );
    }
    if (menuId === "Td") {
      setSubScreen(
        <table>
          <caption>Alien football stars</caption>
          <tr>
            <th scope="col">Player</th>
            <th scope="col">Gloobles</th>
            <th scope="col">Za'taak</th>
          </tr>
          <tr>
            <th scope="row">TR-7</th>
            <Td>7</Td>
            <Td>4,569</Td>
          </tr>
          <tr>
            <th scope="row">Khiresh Odo</th>
            <Td>7</Td>
            <Td>7,223</Td>
          </tr>
          <tr>
            <th scope="row">Mia Oolong</th>
            <Td>9</Td>
            <Td>6,219</Td>
          </tr>
        </table>
      );
    }
    if (menuId === "Template") {
      setSubScreen(
        <>
          <table id="producttable">
            <thead>
              <tr>
                <td>UPC_Code</td>
                <td>Product_Name</td>
              </tr>
            </thead>
            <tbody></tbody>
          </table>

          <template id="productrow">
            <tr>
              <td>111</td>
              <td>2222</td>
            </tr>
          </template>
        </>
      );
    }
    if (menuId === "Textarea") {
      setSubScreen(
        <>
          <label htmlFor="story">Tell us your story:</label>

          <Textarea id="story" name="story" rows={5} cols={33}>
            It was a dark and stormy night...
          </Textarea>
        </>
      );
    }
    if (menuId === "Tfoot") {
      setSubScreen(
        <table>
          <caption>Council budget (in £) 2018</caption>
          <thead>
            <tr>
              <th scope="col">Items</th>
              <th scope="col">Expenditure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Donuts</th>
              <td>3,000</td>
            </tr>
            <tr>
              <th scope="row">Stationery</th>
              <td>18,000</td>
            </tr>
          </tbody>
          <Tfoot>
            <tr>
              <th scope="row">Totals</th>
              <td>21,000</td>
            </tr>
          </Tfoot>
        </table>
      );
    }
    if (menuId === "Th") {
      setSubScreen(
        <table>
          <caption>Alien football stars</caption>
          <tr>
            <Th scope="col">Player</Th>
            <Th scope="col">Gloobles</Th>
            <Th scope="col">Za'taak</Th>
          </tr>
          <tr>
            <Th scope="row">TR-7</Th>
            <td>7</td>
            <td>4,569</td>
          </tr>
          <tr>
            <Th scope="row">Khiresh Odo</Th>
            <td>7</td>
            <td>7,223</td>
          </tr>
          <tr>
            <Th scope="row">Mia Oolong</Th>
            <td>9</td>
            <td>6,219</td>
          </tr>
        </table>
      );
    }
    if (menuId === "Thead") {
      setSubScreen(
        <table>
          <caption>Council budget (in £) 2018</caption>
          <Thead>
            <tr>
              <th scope="col">Items</th>
              <th scope="col">Expenditure</th>
            </tr>
          </Thead>
          <tbody>
            <tr>
              <th scope="row">Donuts</th>
              <td>3,000</td>
            </tr>
            <tr>
              <th scope="row">Stationery</th>
              <td>18,000</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Totals</th>
              <td>21,000</td>
            </tr>
          </tfoot>
        </table>
      );
    }
    if (menuId === "Time") {
      setSubScreen(
        <>
          <p>
            The Cure will be celebrating their 40th anniversary on
            <Time datetime="2018-07-07">July 7</Time> in London's Hyde Park.
          </p>

          <p>
            The concert starts at <Time datetime="20:00">20:00</Time> and you'll
            be able to enjoy the band for at least
            <Time datetime="PT2H30M">2h 30m</Time>.
          </p>
        </>
      );
    }
    if (menuId === "Title") {
      setSubScreen(<Title />);
    }
    if (menuId === "Tr") {
      setSubScreen(
        <table>
          <caption>Alien football stars</caption>
          <Tr>
            <th scope="col">Player</th>
            <th scope="col">Gloobles</th>
            <th scope="col">Za'taak</th>
          </Tr>
          <Tr>
            <th scope="row">TR-7</th>
            <td>7</td>
            <td>4,569</td>
          </Tr>
          <Tr>
            <th scope="row">Khiresh Odo</th>
            <td>7</td>
            <td>7,223</td>
          </Tr>
          <Tr>
            <th scope="row">Mia Oolong</th>
            <td>9</td>
            <td>6,219</td>
          </Tr>
        </table>
      );
    }
    if (menuId === "Track") {
      setSubScreen(
        <video
          controls
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"
        >
          <Track
            kind="captions"
            srcLang="en"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"
          />
          Download the
          <a href="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4">
            MP4
          </a>
          video, and
          <a href="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4t">
            subtitles
          </a>
          .
        </video>
      );
    }
    if (menuId === "Tt") {
      setSubScreen(<Tt />);
    }
    if (menuId === "U") {
      setSubScreen(
        <p>
          You could use this element to highlight <U>speling</U> mistakes, so
          the writer can <U>corect</U> them.
        </p>
      );
    }
    if (menuId === "Ul") {
      setSubScreen(
        <Ul>
          <li>Milk</li>
          <li>
            Cheese
            <Ul>
              <li>Blue cheese</li>
              <li>Feta</li>
            </Ul>
          </li>
        </Ul>
      );
    }
    if (menuId === "Var") {
      setSubScreen(
        <p>
          The volume of a box is <Var>l</Var> × <Var>w</Var> × <Var>h</Var>,
          where <Var>l</Var> represents the length,
          <Var>w</Var> the width and <Var>h</Var> the height of the box.
        </p>
      );
    }
    if (menuId === "Video") {
      setSubScreen(
        <Video width="250">
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
            type="video/webm"
          />
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
            type="video/mp4"
          />
          Download the
          <a href="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm">
            WEBM
          </a>
          or
          <a href="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm">
            MP4
          </a>
          video.
        </Video>
      );
    }
    if (menuId === "Wbr") {
      setSubScreen(
        <div id="example-paragraphs">
          <p>Fernstraßenbauprivatfinanzierungsgesetz</p>
          <p>
            Fernstraßen
            <Wbr />
            bau
            <Wbr />
            privat
            <Wbr />
            finanzierungs
            <Wbr />
            gesetz
          </p>
          <p>Fernstraßen&shy;bau&shy;privat&shy;finanzierungs&shy;gesetz</p>
        </div>
      );
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
              onMenu("Iframe");
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
              onMenu("Input");
            }}
          >
            Input
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
              onMenu("InputDate");
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
              onMenu("Kbd");
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
              onMenu("Tbody");
            }}
          >
            Tbody
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
