import React from "react";
import Tree from './tree';
import {StaticQuery, graphql} from "gatsby";
import styled from "@emotion/styled";
import {ExternalLink} from "react-feather";
import '../styles.css';
import config from '../../../config';

const forcedNavOrder = config.sidebar.forcedNavOrder;

// eslint-disable-next-line no-unused-vars
const ListItem = styled(({ className, active, level, ...props }) => {
    return (
      <li className={className}>
        <a href={props.to} {...props} />
      </li>
    );
})`
  list-style: none;

  a {
    color: #5C6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: rgb(92, 19, 13) !important;
    }

    ${props =>
      props.active &&
      `
      color: #663399;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;

const Sidebar = styled('aside')`
  width: 100%;
  /* background-color: rgb(245, 247, 249); */
  /* border-right: 1px solid #ede7f3; */
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-left: 0px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
  padding-right: 0;
  background-color: #ee3524;
  /* Safari 4-5, Chrome 1-9 */
  background: linear-gradient(#ee3524, #5c130d);
  background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ee3524), to(#5c130d));
  /* Safari 5.1, Chrome 10+ */
  background: -webkit-linear-gradient(top, #ee3524, #5c130d);
  /* Firefox 3.6+ */
  background: -moz-linear-gradient(top, #ee3524, #5c130d);
  /* IE 10 */
  background: -ms-linear-gradient(top, #ee3524, #5c130d);
  /* Opera 11.10+ */
  background: -o-linear-gradient(top, #ee3524, #5c130d);
  z-index: 999;

  @media only screen and (max-width: 1023px) {
    width: 100%;
    /* position: relative; */
    height: 100vh;
  }
  @media (min-width: 767px) and (max-width:1023px)
  {
    padding-left: 0;
  }
  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    background-color: #ee3524;
    background: #ee3524;
    height: auto;
  }
`;


const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #ede7f3;
  }
`;


const SidebarLayout = ({location}) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({allMdx}) => {
      return (
        <Sidebar>
          <ul className={'sideBarUL'}>
            <Tree
              edges={allMdx.edges}
            />
            <Divider />
            {config.sidebar.links.map((link, key) => {
              if (link.link !== '' && link.text !== '') {
                return (
                  <ListItem key={key} to={link.link}>
                    {link.text}
                    <ExternalLink size={14} />
                  </ListItem>
                );
              }
            })}
          </ul>
        </Sidebar>
      );
    }}
  />
);

export default SidebarLayout;
