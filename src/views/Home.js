import React from 'react';
import styled from 'styled-components';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';

import Button from 'components/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  grid-gap: 10px;
  padding: 15px;

  div {
    min-width: 15%;
    display: flex;
    margin: 10px;

    div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      span {
        margin-bottom: 10px;
      }
    }
  }
`;

const Home = () => (
  <div>
    <h1>Buttons</h1>
    <Wrapper>
      <div>
        <div>
          <span>&lt;Button /&gt;</span>
          <Button>Default</Button>
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <Button className="default__hover">Default</Button>
        </div>
      </div>
      <div>
        <div>
          <span>&lt;Button variant=&quot;outline&quot; /&gt;</span>
          <Button variant="outline" isShadowDisabled>
            Outline
          </Button>
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <Button variant="outline" isShadowDisabled className="outline__hover">
            Outline
          </Button>
        </div>
      </div>
      <div>
        <div>
          <span>&lt;Button variant=&quot;text&quot; /&gt;</span>
          <Button variant="text" isShadowDisabled>
            Text
          </Button>
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <Button variant="text" isShadowDisabled className="text__hover">
            Text
          </Button>
        </div>
      </div>
      <div>
        <div>
          <span>&lt;Button isShadowDisabled /&gt;</span>
          <Button isShadowDisabled>No shadow</Button>
        </div>
      </div>
      <div>
        <div>
          <span>&lt;Button isDisabled /&gt;</span>
          <Button isShadowDisabled isDisabled>
            Disabled
          </Button>
        </div>
        <div>
          <span>&lt;Button variant=&quot;text&quot; isDisabled /&gt;</span>
          <Button variant="text" isShadowDisabled isDisabled>
            Disabled
          </Button>
        </div>
      </div>
      <div>
        <div>
          <span>&lt;Button startIcon /&gt; with icon before text </span>
          <Button startIcon>
            <LocalGroceryStoreRoundedIcon /> Start icon
          </Button>
        </div>
        <div>
          <span>&lt;Button endIcon /&gt; with icon after text</span>
          <Button endIcon>
            End icon <LocalGroceryStoreRoundedIcon />
          </Button>
        </div>
      </div>
      <div>
        <div>
          <span>&lt;Button size=&quot;sm&quot; /&gt;</span>
          <Button size="sm">Small</Button>
        </div>
        <div>
          <span>&lt;Button size=&quot;md&quot; /&gt;</span>
          <Button size="md">Medium</Button>
        </div>
        <div>
          <span>&lt;Button size=&quot;lg&quot; /&gt;</span>
          <Button size="lg">Large</Button>
        </div>
      </div>
      <div>
        <div>
          <span>&lt;Button color=&quot;default&quot; /&gt;</span>
          <Button color="default">Default</Button>
        </div>
        <div>
          <span>&lt;Button color=&quot;primary&quot; /&gt;</span>
          <Button color="primary">Primary</Button>
        </div>
        <div>
          <span>&lt;Button color=&quot;secondary&quot; /&gt;</span>
          <Button color="secondary">Secondary</Button>
        </div>
        <div>
          <span>&lt;Button color=&quot;danger&quot; /&gt;</span>
          <Button color="danger">Danger</Button>
        </div>
      </div>
      <div>
        <div>
          <span>&:hover, &:focus</span>
          <Button color="default" className="color default">
            Default
          </Button>
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <Button color="primary" className="color primary">
            Primary
          </Button>
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <Button color="secondary" className="color secondary">
            Secondary
          </Button>
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <Button color="danger" className="color danger">
            Danger
          </Button>
        </div>
      </div>
    </Wrapper>
  </div>
);

export default Home;
