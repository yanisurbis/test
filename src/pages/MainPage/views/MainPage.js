import React, { Component, PropTypes as t } from 'react'
import { Segment, Divider } from 'semantic-ui-react'

import MainPageForm from 'code/pages/MainPage/views/MainPageForm'
import IssueList from 'code/pages/MainPage/views/IssueList/IssueList'
import ActionButton from 'code/pages/MainPage/views/ActionButton'
import ButtonClearValues from 'code/pages/MainPage/views/ButtonClearValues'
import SmallError from 'code/components/SmallError'
import Loading from 'code/pages/MainPage/views/Loading'

import Center from 'code/components/grids/Center'
import ResponsiveWrapper from 'code/components/grids/ResponsiveWrapper'

export default class MainPage extends Component {
  // when 'reset' button is pushed
  handleClickClearValuesButton = () => {
    const { reset, clearData } = this.props
    // clear redux form state (reduxForm's action)
    reset()
    // clear all data that was fetched, literally, all of them
    clearData()
  }

  handleChangeForIssuesPerPageInput = () => {
    const { clearIssuesComments,
            username, repositoryName,
            change, untouch,
          } = this.props
    // deleting all fetched issues and comments
    clearIssuesComments(username, repositoryName)
    // repo field delete
    change('repositoryName', '')
    untouch('repositoryName')
  }

  handleChangeForUsernameInput = ( _, username) => {
    // on every change of user name we invoke action creator
    const { fetchRepos, change, untouch } = this.props
    fetchRepos(username)
    change('repositoryName', '')
    untouch('repositoryName')
  }

  handleClickShowMoreButton = () => {
    const { username, repositoryName, issuesPerPage,
            fetchIssues
          } = this.props
    fetchIssues(username, repositoryName, issuesPerPage)
  }

  handleClickTryAgainButton = () => this.handleClickShowMoreButton()

  render() {
    const {
      // props from redux form
      pristine,
      // data: fetched issues
      issues,
      // errors & indicators
      fetchingStatus: { fetchingIssues },
      fetchingErrors: { fetchIssuesErrorStatusCode },
    } = this.props

    const newProps = {
      ...this.props,
      handleChangeForUsernameInput: this.handleChangeForUsernameInput,
      handleChangeForIssuesPerPageInput: this.handleChangeForIssuesPerPageInput,
    }

    return (
      <Center>
        <ResponsiveWrapper textAlign="left">
          <Segment>
            <MainPageForm {...newProps } />
            <Divider hidden />
            <ButtonClearValues
              // disabled if form wasn't touched
              disabled={pristine}
              onClick={this.handleClickClearValuesButton}
            />
          </Segment>
        </ResponsiveWrapper>

        <ResponsiveWrapper textAlign="left">
          <IssueList
            issues={issues}
          />
        </ResponsiveWrapper>

        <ResponsiveWrapper textAlign="center">
          { fetchIssuesErrorStatusCode !== null
            && <SmallError status={fetchIssuesErrorStatusCode} /> }
        </ResponsiveWrapper>

        <ResponsiveWrapper textAlign="center">
          { fetchingIssues === true
              ? <Loading />
              : fetchIssuesErrorStatusCode === null
                ? <ActionButton
                    onClick={this.handleClickShowMoreButton}
                    disabled={issues.length === 0}
                    text={"Show More"}
                  />
                : <ActionButton
                    onClick={this.handleClickTryAgainButton}
                    text={"Try Again"}
                  />
          }
        </ResponsiveWrapper>

      </Center>
    );
  }
}

MainPage.propTypes = {
  // REDUX FORM
  // deleting values from redux form
  reset: t.func.isRequired,
  pristine: t.bool.isRequired,
  change: t.func.isRequired,
  untouch: t.func.isRequired,
  // action creators
  clearData: t.func.isRequired,
  clearIssuesComments: t.func.isRequired,
  fetchRepos: t.func.isRequired,
  fetchIssues: t.func.isRequired,
  // data
  username: t.string,
  repositoryName: t.string,
  issuesPerPage: t.string,
  issues: t.arrayOf(t.object).isRequired,
  // errors & indicators
  fetchingStatus: t.shape({
    fetchingIssues: t.bool.isRequired,
  }).isRequired,
  fetchingErrors: t.shape({
    fetchIssuesErrorStatusCode: t.number,
  }).isRequired,
}
