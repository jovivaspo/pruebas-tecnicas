import {style} from '@vanilla-extract/css'

export const articleStory = style({
    color: '#374151',
    marginBottom: '48px'

})

export const storyTitle = style({
    textDecoration: 'none',
    color: '#111',
    fontSize: '18px'
})

export const articleHeader = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '4px',
    lineHeight: '24px'
})

export const articleFooter = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    lineHeight: '24px',
    fontSize: '12px'
})

export const smallLink = style({
    textDecoration: 'none',
    color: '#888',
    ':hover': {
        textDecoration: 'underline'
    }
})