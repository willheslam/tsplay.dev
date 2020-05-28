/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import logoImg from '../assets/logo.svg'
import { Palette } from '../constants'

const styles = {
  container: css`
    background: ${Palette.white};
    height: 70px;
    display: flex;
    padding: 0 25px;
    align-items: flex-end;
  `,
  logo: css`
    height: 45px;
    width: 45px;
  `,
  title: css`
    font-size: 2rem;
    color: ${Palette.secondary};
    margin-left: 10px;
    font-weight: 600;
  `,
}

const Header: React.FC = () => {
  return (
    <div css={styles.container}>
      <img src={logoImg} alt="logo" css={styles.logo} />
      <span css={styles.title}>TS Play</span>
    </div>
  )
}

export default Header