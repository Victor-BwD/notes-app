import { withStyles } from "@material-ui/core/styles"
import Radio from "@material-ui/core/Radio"

import './styles.css';

export default function RadioButton() {
  const CustomRadio = withStyles({
    root: {
      color: '#FFD3CA',
      '&$checked': {
        color: '#EB8F7A',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  return (
    <div className="radioOptions">
    <div>
      <CustomRadio />
      <span>Todos</span>
    </div>

    <div>
      <CustomRadio />
      <span>Prioridade</span>
    </div>

    <div>
      <CustomRadio />
      <span>Normal</span>
    </div>
    </div>
  )
}