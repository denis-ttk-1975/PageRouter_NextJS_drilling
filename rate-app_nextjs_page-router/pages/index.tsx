import { Button, Htag } from '@/components';

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



    </>
  );
}
