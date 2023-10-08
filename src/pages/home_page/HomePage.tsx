import React from "react";
import DefaultButton from "../../components/default_button/DefaultButton";
import {DefaultButtonColor} from "../../components/default_button/DefaultButtonColor";
import Tag from "../../components/tag/Tag";
import {TagType} from "../../components/tag/TagType";
import BurgerButton from "../../components/burger_button/BurgerButton";

const HomePage: React.FC = () => {
  return(
    <div style={{margin: '50px', display: 'flex', flexDirection: 'column', gap: '12px'}}>
      <DefaultButton color={DefaultButtonColor.VIOLET} text="text" onClickAction={() => true}/>
      <DefaultButton color={DefaultButtonColor.GRAY} text="text" onClickAction={() => true}/>
      <DefaultButton color={DefaultButtonColor.WHITE} text="text" onClickAction={() => true}/>
      <DefaultButton color={DefaultButtonColor.MINT} text="text" onClickAction={() => true}/>
      <DefaultButton color={DefaultButtonColor.YELLOW} text="text" onClickAction={() => true}/>
      <DefaultButton color={DefaultButtonColor.ORANGE} text="text" onClickAction={() => true}/>
      <DefaultButton color={DefaultButtonColor.BLUE} text="text" onClickAction={() => true}/>
      <DefaultButton color={DefaultButtonColor.BLACK} text="text" onClickAction={() => true}/>
      <div style={{ marginBottom: '200px', display: 'flex', flexDirection: 'row', gap: '8px', width: '275px', flexWrap: 'wrap' }}>
        <Tag type={TagType.REACT} />
        <Tag type={TagType.REACT_NATIVE} />
        <Tag type={TagType.SPRING_BOOT} />
        <Tag type={TagType.GIT} />
        <Tag type={TagType.POSTGRESQL} />
        <Tag type={TagType.DOCKER} />
        <Tag type={TagType.CMS} />
      </div>
    </div>
  )
}

export default HomePage
