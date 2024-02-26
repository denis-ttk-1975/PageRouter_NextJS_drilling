import { Button, Htag, Paragraph, Tag, Rating } from '@/components';

export default function Home(): JSX.Element {
  return (
    <>
    <Htag tag = 'h1'>Page Router - старый</Htag>
    <Htag tag = 'h1'>Наименование111</Htag>
    <Htag tag = 'h2'>Наименование222</Htag>
    <Htag tag = 'header_title'>Наименование header title</Htag>
    <div style = {{padding: 10}}><Button appearance = 'primary' arrow = 'right'>Отправить</Button></div>
    <div><Button appearance = 'like'>L</Button></div>
    <div style = {{padding: 10}}><Button appearance='ghost' arrow = 'down'>Привидение</Button></div>

    <Paragraph>Средний размерчик </Paragraph>
    <Paragraph typography = 'large' >Большой размерчик </Paragraph>
    <Paragraph typography = 'small' >Малый размерчик </Paragraph>

    <Tag size = 'small'>Ghost</Tag>
<Tag size = 'small' color = 'red' href = 'www.google.com'>Red</Tag>
<Tag size = 'small' color = 'green'>Green</Tag>
<Tag size = 'small' color = 'primary'>Purple</Tag>
<Tag size = 'small' color = 'grey'>Grey</Tag>
<Rating rating = {3}/>
    </>

  );
}
