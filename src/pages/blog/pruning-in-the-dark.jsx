import React from "react";
import "../../styles/global.css";
import BlogArticle from "./../../components/BlogArticle";
import lantanasImage from "../../images/lantanas.jpg";

export default function PruningInTheDark() {
  const content = (
    <div>
      <p>
        I want to preface this with two things. First, I’m not a mental health
        expert. The only valid credentials I have for this topic are that I’m a
        human, I have experiences, and I’m trying my best. Second, writing this
        blog is essentially me shooting a dart in the dark, hoping it lands
        somewhere. I am talking to the ether, and maybe, just maybe, it
        resonates with you.
      </p>

      <p>
        I’m in a new chapter of life right now. On paper, I’m juggling: figuring
        out motherhood, running a business, being a good partner, getting to
        know my new self, navigating grief, and finding time for family and
        friends. But "juggling" doesn’t feel like the right word. Juggling
        implies a rhythm, a catch and release.
      </p>

      <p>
        Honestly? It feels more like I’m trying to gather water with a rake.
      </p>

      <p>
        The water is that sense of balance I’m trying to achieve. It’s the
        business, the baby, the marriage, and everything in between. But no
        matter how hard I work the rake, the water just slips through.
      </p>

      <p>
        The thing is, I asked for this life. I prayed for it. I love my little
        family, I love my business, I genuinely love my life. But I’m learning
        that just like with relationships, love is not enough. The effort, the
        push and pull, and navigating the highs and lows are what make it all
        worth it.
      </p>

      <p>
        And I have a lot of highs, but I have a lot of lows too. I want to talk
        about one of the ways I navigate those lows.
      </p>

      <p>
        My time to "deal" with things is usually late at night. My husband takes
        the night shift so he can get some extra hours of sleep, but before I
        turn in, I spend the evening cleaning up, making baby formula, and
        catching up on business work. But there are some nights where the
        overwhelm of everything on my plate bubbles to the top.
      </p>

      <p>
        In that moment, I give myself a split-second amount of space between my
        feelings and my actions. I usually have two choices:
      </p>

      <p>
        <ol>
          <li>
            Doom scroll. This is the path of least resistance. I numb out. I get
            a few good laughs from Reels, maybe convince myself I’m doing
            "market research," but mostly it’s just a way to avoid feeling
            anything.
          </li>
          <br />
          <li>Move my body. And I mean drastically move.</li>
        </ol>
      </p>

      <p>
        When I choose movement, I’m not talking about rolling out a mat for
        gentle breathing exercises or gentle pre-Pilates. Even though those are
        great and have their time and place, when I am overwhelmed I have to
        step way outside my comfort zone. I have to shake it up.
      </p>

      <p>
        Sometimes that means driving to my studio late at night. I blast music
        in the car on the way there, and once I arrive, I do a full Pilates
        workout until I'm exhausted. Or it means going out into the backyard at
        11 PM to do some aggressive yard work.
      </p>

      <p>Tonight, it was pruning the overgrown lantanas.</p>

      <p>
        If you aren't familiar with them, they are these hardy shrubs that burst
        with little clusters of red and yellow flowers. But when they get
        overgrown, they become a tangled mess of woody vines. Mine were layering
        over the pavement and needed to be dealt with.
      </p>

      <p>
        Cutting them back felt cathartic. I had to pull so much weight off the
        top and mulch just to find the bottom. Each vine I snipped felt like I
        was sifting through the noise, getting rid of the unnecessary things
        I’ve been holding inside.
      </p>

      <p>
        It took about an hour of labor. But as I finally cleared the debris and
        stared at the exposed base of the plant (I cut them down to
        finger-length so they bloom better in the spring and stay healthy), I
        realized I had finally reached the root of my own overwhelm.
      </p>

      <p>
        At first, I thought I was upset because of the to-do lists, the
        wash-rinse-repeat cycle of the day, and the pressure. But underneath all
        of those layers was something I wasn’t expecting.
      </p>

      <p>
        In the silence of the yard, staring at the base of the plant, I realized
        that one of the heaviest things I was carrying that night was grief. I
        was missing my dad, who unexpectedly passed away in 2024.
      </p>

      <p>
        It is painful to grieve. But as my tears fell into the soil, mixing with
        the work I was doing, I felt a bit of relief. The feelings were finally
        being processed. If I had sat on the couch and scrolled, those feelings
        would have just ruminated, buried under the vines forever.
      </p>

      <p>
        But I want to be realistic: choosing to move is a practice, not a
        perfect system.
      </p>

      <p>
        I can’t hold myself to a rigid expectation that I must move every time
        I’m upset. I won’t always find the strength. But this is what I have
        been doing lately, and it helps.
      </p>

      <p>
        I’m learning to make space for the full range of my emotions. I don’t
        believe a fulfilling life is one where you always just "feel good." It’s
        about having the capacity to feel it all.
      </p>

      <p>
        I’m learning that I will never be able to gather the water, no matter
        how hard I rake. But I can clear the ground and I can tend to my roots.
      </p>

      <p>
        If you are finding yourself in a low place, try to move. It doesn't have
        to be Pilates, it doesn't have to be weightlifting, and it doesn't have
        to be aggressive yard work. It can be anything. Just find a way to get
        out of your head and into your body.
      </p>

      <p>
        For tonight, the vines are cut and the tears are dried. And that is
        enough.
      </p>
      <img
        src={lantanasImage}
        alt="Picture of the debris from a lantana plant"
        class="blog-image"
      ></img>
    </div>
  );
  return (
    <BlogArticle
      title="Pruning in the Dark"
      postDate="Dec 29, 2025"
      readTime="3 min read"
      content={content}
    ></BlogArticle>
  );
}
