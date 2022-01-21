import styled from '@emotion/styled';

const Murrika = styled.ul`
  & > li:last-child {
    font-weight: bold;
  }
`;

const Credits = styled.p`
  text-align: right;
  font-style: italic;
`;

const C = styled.span`
   color: transparent;
   text-shadow: 0 0 5px rgba(0,0,0,0.5);
`;

const About = (): JSX.Element => (
  <div>
    <h1>
      About Us
    </h1>
    <p>
      The Deliverator belongs to an elite order, a hallowed subcategory. He's got esprit up to here. 
      Right now, he is preparing to carry out his third mission of the night. 
      His uniform is black as activated charcoal, filtering the very light out of the air. 
      A bullet will bounce off its arachnofiber weave like a wren hitting a patio door, but excess perspiration wafts through it like a breeze through a freshly napalmed forest. 
      Where his body has bony extremities, the suit has sintered armorgel: feels like gritty jello, protects like a stack of telephone books.
    </p>
    <p>
      When they gave him the job, they gave him a gun. 
      The Deliverator never deals in cash, but someone might come after him anyway—might want his car, or his cargo. 
      The gun is tiny, aero-styled, lightweight, the kind of a gun a fashion designer would carry; 
      it fires teensy darts that fly at five times the velocity of an SR-71 spy plane, and when you get done using it, you have to plug it into the cigarette lighter, because it runs on electricity.
    </p>
    <p>
      The Deliverator never pulled that gun in anger, or in fear. He pulled it once in Gila Highlands. 
      Some punks in Gila Highlands, a fancy Burbclave, wanted themselves a delivery, and they didn't want to pay for it. 
      Thought they would impress the Deliverator with a baseball bat. 
      The Deliverator took out his gun, centered its laser doo-hickey on that poised Louisville Slugger, fired it. 
      The recoil was immense, as though the weapon had blown up in his hand. 
      The middle third of the baseball bat turned into a column of burning sawdust accelerating in all directions like a bursting star. 
      Punk ended up holding this bat handle with milky smoke pouring out the end. Stupid look on his face. 
      Didn't get nothing but trouble from the Deliverator.
    </p>
    <p>
      Since then the Deliverator has kept the gun in the glove compartment and relied, instead, on a matched set of samurai swords, which have always been his weapon of choice anyhow. 
      The punks in Gila Highlands weren't afraid of the gun, so the Deliverator was forced to use it. 
      But swords need no demonstrations.
    </p>
    <p>
      The Deliverator's car has enough potential energy packed into its batteries to fire a pound of bacon into the Asteroid Belt. 
      Unlike a <C>bimbo</C> box or a Burb beater, the Deliverator's car unloads that power through gaping, gleaming, polished sphincters. 
      When the Deliverator puts the hammer down, shit happens. 
      You want to talk contact patches? Your car's tires have tiny contact patches, talk to the asphalt in four places the size of your tongue. 
      The Deliverator's car has big sticky tires with contact patches the size of a fat lady's thighs. 
      The Deliverator is in touch with the road, starts like a bad day, stops on a peseta.
    </p>
    <p>
      Why is the Deliverator so equipped? Because people rely on him. He is a roll model. This is America. 
      People do whatever the <C>fuck</C> they feel like doing, you got a problem with that? Because they have a right to. 
      And because they have guns and no one can <C>fucking</C> stop them. As a result, this country has one of the worst economies in the world. 
      When it gets down to it—talking trade balances here—once we've brain-drained all our technology into other countries, 
      once things have evened out, they're making cars in Bolivia and microwave ovens in Tadzhikistan and selling them here—once our edge 
      in natural resources has been made irrelevant by giant Hong Kong ships and dirigibles that can ship North Dakota all the way to New Zealand for a 
      nickel—once the Invisible Hand has taken all those historical inequities and smeared them out into a broad global layer of what a Pakistani brickmaker 
      would consider to be prosperity—y'know what? There's only four things we do better than anyone else
    </p>
    <p>
      <Murrika>
        <li>music</li>
        <li>movies</li>
        <li>microcode (software)</li>
        <li>high-speed pizza delivery</li>
      </Murrika>
    </p>
    <Credits>
      Stephenson, Neal. Snow Crash (p. 1). Random House Publishing Group. Kindle Edition. 
    </Credits>
  </div>
);

export default About;
