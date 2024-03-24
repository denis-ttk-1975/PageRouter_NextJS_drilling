import { Button, Htag, Paragraph, Tag, Rating } from '@/components';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

function Home({menu, firstCategory}: HomeProps): JSX.Element {
    console.log('firstCategory: ', firstCategory);
    console.log('menu: ', menu);
    const [rating, setRating] = useState(3);



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
        <Rating rating = {rating} isEditable setRating={setRating} />
        <ul>
              {menu.map(item => (<li key={item._id.secondCategory}>{item._id.secondCategory}</li>))}
        </ul>
    </>

  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async ()  => {
    const firstCategory = 0;
    const { data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory,
    });


    return {
        props: {
            menu,
            firstCategory

        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number,
}