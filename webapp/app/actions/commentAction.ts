'use server';

export async function submitComment( formData: FormData) {
  
  const email = formData.get('email') as string;
  const comment = formData.get('comment') as string;
  const id = formData.get('articleId') as string;

  console.log('Data:', { email, comment, id });

  const payload = {
    authorEmail: email,
    content: comment,
    articleId: parseInt(id),
    status: 'pending'
  };

  try {
    const url = `${process.env.BASE_URL}/comments/Insert`;
    console.log('Fetching:', url);

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store'
    });

    console.log('Response:', response.status);
    
    const data = await response.json();

    // if (!response.ok) {
    //   return { success: false, message: data.message || 'خطا' };
    // }

    // return { success: true, message: 'موفق' };

  } catch (error: any) {
    console.error('Error:', error);
    // return { success: false, message: error.message };
  }
}