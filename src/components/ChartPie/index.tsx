import React from 'react'
import { VictoryPie } from "victory-native";
import { Svg } from 'react-native-svg';
import { usePaidLeave } from '../../hooks/usePaidLeave'
// import moment from 'moment'
import { format, parseISO } from 'date-fns'
import { pt as locale } from 'date-fns/locale'

import { Container } from './styles'

export const ChartPie: React.FC = () => {
  const { timeline } = usePaidLeave()

  const data = timeline.map((item, index) => {
    // let mesFormated = moment(item.date).locale('pt-BR').format('MMM')
    let mesFormated = (format(parseISO(item.date), 'MMM', { locale })).toUpperCase()
    let diaFormated = item.days === null ? '' : `+${item.days} dia`

    return {
      key: index,
      y: 15,
      x: `${mesFormated} \n${diaFormated}`,
      color: item.days === null ? 'transparent' : (index !== 5 && index !== 11) ? '#009C3A' : '#00649C'
    }
  })

  let colorScales = data.map((item) => item.color)

  return (
    <Container>
      <VictoryPie
        data={data}
        innerRadius={80}
        animate={{ duration: 1500 }}
        labelRadius={100}
        style={{
          data: {
            stroke:  "#FFFFFF",
          },
          labels: {
            fill: "white",
            stroke: "none",
            fontSize: 15,
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center"
          }
        }}
        colorScale={colorScales}
        labelPosition="centroid"
        labelPlacement="perpendicular"
      />
    </Container>
  )
}
