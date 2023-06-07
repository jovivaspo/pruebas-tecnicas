import { style } from '@vanilla-extract/css'

export const buttonInfiniteScroll = style({
    display:'flex',
    justifyContent:'center',
    width: '120px',
    padding:'4px 12px',
    background: 'transparent',
    border: '1px solid #ddd',
    borderRadius: '20px',
    margin: '20px auto',

    ':hover': {
        border:'1px solid black',
        color: 'black',

    }
})