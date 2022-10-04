import Gift from 'components/Gift/Gift';
import Spinner from 'components/Spinner';
import useSingleGift from 'hooks/useSingleGift';
import useSEO from 'hooks/useSEO';
import { Redirect } from 'wouter';
import { Helmet } from 'react-helmet';

export default function Detail({ params }) {
  const { gift, isLoading, isError } = useSingleGift({ id: params.id });
  const title = gift ? gift.title : '';

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </>
    );
  if (isError) return <Redirect to='404' />;
  if (!gift) return null;

  return (
    <>
      <Helmet>
        <title>{title} || Giffy</title>
      </Helmet>
      <Gift {...gift} />{' '}
    </>
  );
}
