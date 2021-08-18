import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: '1px black',
    borderStyle: 'outset',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
    boxShadow: 'none',
    border: 'none',
  },
  gridItem: {
    borderBottom: '1px black',
    borderRight: '1px black',
    borderStyle: 'outset!important',
  },
  gridItemFirst: {
    borderLeft: '1px black',
    borderStyle: 'outset',
  },
  gridItemTop: {
    borderTop: '1px black',
    borderStyle: 'outset',
  },
}))

export default function ArchiveGrid({ archiveList }) {
  // className={
  //   `` +
  //   (idx === 0
  //     ? `${classes.gridItem} ${classes.gridItemTop} ${classes.gridItemFirst}`
  //     : (gt600 && idx % 6 === 0) || (!gt600 && idx % 3 === 0)
  //     ? `${classes.gridItem} ${classes.gridItemFirst}`
  //     : (gt600 && idx < 6) || (!gt600 && idx < 3)
  //     ? `${classes.gridItem} ${classes.gridItemTop}`
  //     : classes.gridItem)
  // }
  const classes = useStyles()
  const theme = useTheme()
  const gt600 = useMediaQuery('(min-width:600px)')
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        {archiveList.map((el, idx) => (
          <Grid item key={el.id} xs={4} sm={2}>
            <Link href={el.resource_url}>
              <Paper className={classes.paper}>
                <Image
                  src={el.thumb_url}
                  alt={el.title}
                  width={100}
                  height={100}
                  layout="intrinsic"
                />
                {el.title}
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
