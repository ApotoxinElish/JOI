import TextField from '@mui/material/TextField'

const TextInput = ({ value, onChange }) => {
  const style = {
    width: '95%', // 宽度为100%
    color: 'white', // 字体颜色为白色
    input: {
      color: 'white', // 输入框内文字颜色为白色
    },
    '& label.Mui-focused': {
      color: 'white', // 获得焦点时标签颜色
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white', // 默认边框颜色
      },
      '&:hover fieldset': {
        borderColor: 'white', // 鼠标悬停时边框颜色
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white', // 获得焦点时边框颜色
      },
    },
  }

  return (
    <TextField
      style={{ width: style.width }}
      InputLabelProps={{ style: { color: style.color } }}
      InputProps={{
        style: style.input,
        classes: {
          root: style['& .MuiOutlinedInput-root'].root,
          focused: style['& .MuiOutlinedInput-root'].focused,
          notchedOutline: style['& .MuiOutlinedInput-root']['& fieldset'],
        },
      }}
      value={value}
      onChange={onChange}
      variant="outlined"
    />
  )
}

export default TextInput
