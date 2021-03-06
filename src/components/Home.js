import styled from 'styled-components';
import Leftside from './Leftside';
import Main from './Main';
import Rightside from './Rightside';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
    return (
        <Container>
            {!props.user && <Redirect to = '/' />}
            <Section>
                <h5>
                    <a> Hiring in a hurry? - </a>
                </h5>
                <p> Find talents in record time with LinkedIn Premium and unlock special benefits!</p>
            </Section>

            <Layout>
                <Leftside />
                <Main />
                <Rightside />
            </Layout>
        </Container>
    );
}


const Container = styled.div`
  padding-top: 60px;
  max-width: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.section`
  min-height: 40px;
  padding: 5px 0;
  box-sizing: content-box;
  text-align: center;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    text-decoration: underline;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 35px;
  row-gap: 25px; 
  padding-left: 80px;
  padding-right: 80px;
  /* grid-template-row: auto; */
  margin: 1px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

export default connect(mapStateToProps)(Home);