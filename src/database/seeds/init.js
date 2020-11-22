const { encrypt } = require('../../utils');
exports.seed = async (knex) => {
  //inser user
  const users = [
    {
      name: 'Hai Nguyen',
      email: 'nnhaigl@gmail.com',
      password: '123456',
    },
    {
      name: 'test100',
      email: 'test100@gmail.com',
      password: '123456',
    },
  ];
  await Promise.all(
    users.map(async (item) => {
      const user = await knex('users').select('id').where('email', item.email);
      if (user.length === 0) {
        return knex('users').insert({
          name: item.name,
          email: item.email,
          password: await encrypt.hashPassword(item.password),
        });
      }
    })
  );

  const user = await knex('users').select('id');
  const userId = user[0].id;

  var wishlist = [
    {
      user_id: userId,
      title: 'condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec',
      note: 'et ipsum cursus vestibulum. Mauris magna.',
      status: 'True',
      uuid: 'D4F66F01-34F5-72BE-6267-FA4D0DCC05F6',
    },
    {
      user_id: userId,
      title:
        'orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim.',
      note:
        'lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare,',
      status: 'True',
      uuid: '7DD506B3-CA92-698F-A8D6-3EC629E63D92',
    },
    {
      user_id: userId,
      title: 'netus et malesuada fames',
      note:
        'blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla',
      status: 'False',
      uuid: '34386575-1C35-1240-5F3D-87C6FB57EBBB',
    },
    {
      user_id: userId,
      title: 'Nulla eu neque pellentesque massa lobortis ultrices. Vivamus',
      note:
        'odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque,',
      status: 'False',
      uuid: 'CA9D1971-F6AA-40F1-1305-D545D625F4D9',
    },
    {
      user_id: userId,
      title:
        'ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo.',
      note:
        'mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere,',
      status: 'False',
      uuid: '17B8AAFE-CC82-2E0F-0E1B-CD8E1068D379',
    },
    {
      user_id: userId,
      title:
        'elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan interdum libero dui',
      note:
        'ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
      status: 'False',
      uuid: '638F8CD5-261C-230B-E2C1-7BEDFE6D9280',
    },
    {
      user_id: userId,
      title: 'a, scelerisque sed, sapien. Nunc',
      note:
        'felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis',
      status: 'False',
      uuid: 'B8BD414D-4DB1-6BF8-4292-0402C70E847E',
    },
    {
      user_id: userId,
      title:
        'eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue',
      note:
        'blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies',
      status: 'True',
      uuid: 'A7A859C5-1703-BDF2-6925-7C8C658ACABA',
    },
    {
      user_id: userId,
      title: 'nec ante blandit viverra.',
      note:
        'aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris',
      status: 'False',
      uuid: 'D8469639-5D57-79BE-18A8-098FB7AB31AF',
    },
    {
      user_id: userId,
      title: 'Morbi neque tellus, imperdiet non, vestibulum',
      note:
        'ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque',
      status: 'False',
      uuid: 'C1ECECA2-851C-95BB-FE69-A96EDC849D56',
    },
    {
      user_id: userId,
      title:
        'molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam',
      note:
        'ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui',
      status: 'False',
      uuid: '88372007-BD34-CED1-7413-7DDB58798689',
    },
    {
      user_id: userId,
      title:
        'Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada',
      note:
        'in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor',
      status: 'True',
      uuid: '19E322F7-A2D7-23C2-A855-CF102CD78217',
    },
    {
      user_id: userId,
      title:
        'augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel,',
      note:
        'ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis',
      status: 'True',
      uuid: '4D58AD82-C9F9-ABBC-EF11-E4638ACBC897',
    },
    {
      user_id: userId,
      title: 'risus quis diam luctus lobortis. Class aptent taciti sociosqu ad',
      note:
        'dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut',
      status: 'False',
      uuid: '086CE87D-7494-EA06-6ABF-6465E650E379',
    },
    {
      user_id: userId,
      title:
        'Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem',
      note:
        'Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam',
      status: 'True',
      uuid: 'AFD56588-25E7-5D04-3F51-5313319946CD',
    },
    {
      user_id: userId,
      title: 'at augue id ante dictum cursus. Nunc',
      note:
        'Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis',
      status: 'True',
      uuid: 'D5120D20-DFCC-83B7-0179-59CAD8EADF82',
    },
    {
      user_id: userId,
      title: 'tortor. Integer aliquam adipiscing lacus. Ut',
      note:
        'hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet,',
      status: 'True',
      uuid: '9EF942A2-34B8-DBA5-2C55-694E8F90816F',
    },
    {
      user_id: userId,
      title: 'justo. Proin non',
      note:
        'mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy.',
      status: 'False',
      uuid: '550ACB52-1323-3150-3070-16758D96303F',
    },
    {
      user_id: userId,
      title:
        'nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna.',
      note:
        'semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla.',
      status: 'True',
      uuid: '7E4A1159-97A0-6051-A17D-554B37F93D84',
    },
    {
      user_id: userId,
      title:
        'enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim.',
      note:
        'amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu',
      status: 'False',
      uuid: '17A36237-CF00-C7F9-088A-AD1243806A69',
    },
    {
      user_id: userId,
      title: 'ridiculus mus. Donec',
      note:
        'aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec,',
      status: 'True',
      uuid: 'F203809C-B0EC-8862-99F5-2B2B021E893C',
    },
    {
      user_id: userId,
      title:
        'ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit',
      note:
        'erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum',
      status: 'False',
      uuid: '3A803CB6-9439-D493-4ACF-463B2F7643FE',
    },
    {
      user_id: userId,
      title: 'cursus purus.',
      note:
        'tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse',
      status: 'False',
      uuid: '9508F590-0540-9D1D-B959-673CDCB4C0AF',
    },
    {
      user_id: userId,
      title: 'ac facilisis facilisis, magna tellus faucibus leo,',
      note:
        'ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed',
      status: 'False',
      uuid: '978B16A0-B6C9-7078-30B3-8B6416533C16',
    },
    {
      user_id: userId,
      title:
        'Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae',
      note:
        'Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In',
      status: 'False',
      uuid: 'BA8F164E-7589-BD30-0913-7CF1875D45EA',
    },
    {
      user_id: userId,
      title: 'Nunc quis',
      note:
        'lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac',
      status: 'False',
      uuid: '47CBE1B0-FE97-D5CA-C091-CAC17728719C',
    },
    {
      user_id: userId,
      title:
        'vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed',
      note:
        'mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi.',
      status: 'False',
      uuid: '928D7A2F-B002-ADC3-1496-A54BCABCD672',
    },
    {
      user_id: userId,
      title: 'euismod enim. Etiam gravida molestie arcu.',
      note:
        'Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus',
      status: 'True',
      uuid: 'AA82E8D0-0467-74C2-CE78-C48762F3D13C',
    },
    {
      user_id: userId,
      title:
        'eget laoreet posuere, enim nisl elementum purus, accumsan interdum',
      note:
        'Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat.',
      status: 'True',
      uuid: '2949102E-6229-465D-13F6-45B446F351A8',
    },
    {
      user_id: userId,
      title: 'ultrices iaculis odio. Nam interdum enim non',
      note:
        'lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui.',
      status: 'True',
      uuid: '249A0F36-8A5C-0E85-C7C1-F3F5084A0DFC',
    },
    {
      user_id: userId,
      title:
        'porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum,',
      note:
        'leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio',
      status: 'False',
      uuid: '9FDDDCFA-507A-F41A-6C8A-90BAB356BE08',
    },
    {
      user_id: userId,
      title: 'Ut semper pretium neque. Morbi',
      note:
        'parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum',
      status: 'True',
      uuid: '7A658548-671A-0733-79AD-4124037726C2',
    },
    {
      user_id: userId,
      title:
        'sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec,',
      note: 'auctor, velit eget',
      status: 'True',
      uuid: 'C2FF5B16-941C-FFDC-D60B-C91F9FCFCEA2',
    },
    {
      user_id: userId,
      title: 'tincidunt, neque vitae semper egestas, urna',
      note:
        'Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum',
      status: 'False',
      uuid: 'DB013898-E9B8-1863-5AC5-47382AF80428',
    },
    {
      user_id: userId,
      title: 'blandit at, nisi. Cum sociis natoque penatibus et magnis',
      note:
        'ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet',
      status: 'False',
      uuid: '315AA40B-1F35-8622-DEC7-F5D34D15E242',
    },
    {
      user_id: userId,
      title: 'mollis. Phasellus libero mauris, aliquam eu, accumsan',
      note:
        'mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu.',
      status: 'False',
      uuid: '3D1B6D09-BF62-FE13-FA9C-5C85B97473E9',
    },
    {
      user_id: userId,
      title:
        'sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
      note:
        'sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet',
      status: 'True',
      uuid: 'E8FF0022-3CCA-318D-352A-2E834797B09F',
    },
    {
      user_id: userId,
      title:
        'dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper',
      note: 'aliquam adipiscing lacus. Ut nec urna et',
      status: 'False',
      uuid: 'B477F5FB-757C-B6C5-D64C-87473CE5A457',
    },
    {
      user_id: userId,
      title:
        'Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu.',
      note:
        'eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et',
      status: 'False',
      uuid: '7BD99927-D648-BA32-379C-1DDB6F429D46',
    },
    {
      user_id: userId,
      title:
        'varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu',
      note:
        'eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus,',
      status: 'True',
      uuid: '45751664-642B-6453-6A6A-A99FFCD359C3',
    },
    {
      user_id: userId,
      title: 'vitae semper egestas,',
      note:
        'magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec',
      status: 'True',
      uuid: '09AD514B-D2A1-D3F5-203D-2D3EA774430E',
    },
    {
      user_id: userId,
      title:
        'est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus',
      note:
        'vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum',
      status: 'False',
      uuid: '6D386FB1-F349-3524-6E1C-CE1F3ABB23F9',
    },
    {
      user_id: userId,
      title:
        'id nunc interdum feugiat. Sed nec metus facilisis lorem tristique',
      note:
        'Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis',
      status: 'True',
      uuid: '21D996E6-81F9-D183-8392-139083CF38EE',
    },
    {
      user_id: userId,
      title: 'est, mollis non, cursus non, egestas',
      note:
        'nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam',
      status: 'False',
      uuid: 'FCDEB214-D7D4-98B8-14BA-863C3AE91BFD',
    },
    {
      user_id: userId,
      title:
        'nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id',
      note:
        'augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo',
      status: 'False',
      uuid: 'F9729282-7C9D-371B-916D-52F7C8460B7D',
    },
    {
      user_id: userId,
      title: 'Nunc sed orci lobortis augue scelerisque mollis. Phasellus',
      note:
        'non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum',
      status: 'True',
      uuid: 'FB7E79A9-51E0-5909-8800-38A6E29A8F50',
    },
    {
      user_id: userId,
      title: 'sit amet orci. Ut',
      note:
        'gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque',
      status: 'False',
      uuid: 'EE4B5D9D-890E-7141-421E-0A5FDA9BEB5D',
    },
    {
      user_id: userId,
      title:
        'erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede',
      note: 'dui, semper et, lacinia vitae,',
      status: 'False',
      uuid: '57D37449-F33C-9F53-1460-B8BA5D69C348',
    },
    {
      user_id: userId,
      title: 'accumsan',
      note:
        'dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum.',
      status: 'False',
      uuid: '454D280C-3772-F360-C35E-308771A99CCB',
    },
    {
      user_id: userId,
      title:
        'sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa.',
      note:
        'lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim.',
      status: 'True',
      uuid: 'B61DD0AD-F34C-7B00-4F00-88E19F83A9F6',
    },
    {
      user_id: userId,
      title:
        'eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit',
      note:
        'Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris',
      status: 'True',
      uuid: 'D8746EEE-7DF0-73EE-23C6-F9D461E4E252',
    },
    {
      user_id: userId,
      title: 'leo. Cras vehicula aliquet libero.',
      note:
        'egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non,',
      status: 'True',
      uuid: '4263AFA6-33C9-9106-7C6F-11CB241304B0',
    },
    {
      user_id: userId,
      title: 'luctus, ipsum leo elementum sem, vitae aliquam eros turpis',
      note:
        'libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus.',
      status: 'True',
      uuid: '53F8FC30-5724-EF55-6B16-4F790F74BB5B',
    },
    {
      user_id: userId,
      title: 'non, vestibulum nec,',
      note:
        'Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus',
      status: 'False',
      uuid: '946FA580-699F-9C71-4E80-DC728EDF37D2',
    },
    {
      user_id: userId,
      title: 'Curabitur sed tortor. Integer aliquam adipiscing lacus.',
      note:
        'vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed',
      status: 'True',
      uuid: '0FCB1FD2-09F1-F50D-FCA7-DD851939AE2B',
    },
    {
      user_id: userId,
      title: 'metus. In lorem.',
      note:
        'lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate,',
      status: 'True',
      uuid: '4F1E879A-3638-AFF3-5783-9343F39CA7F5',
    },
    {
      user_id: userId,
      title: 'Morbi neque tellus,',
      note: 'elit. Aliquam auctor,',
      status: 'False',
      uuid: 'EBE18A55-CC3C-39B4-0C8E-731E21A6075A',
    },
    {
      user_id: userId,
      title:
        'senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus',
      note:
        'id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor,',
      status: 'False',
      uuid: '97ED1E84-6C00-C9D7-8EA1-9A3758DE8A48',
    },
    {
      user_id: userId,
      title:
        'mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum.',
      note:
        'sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean',
      status: 'True',
      uuid: '52DC2D6E-EF7B-1F84-830F-1B4DF03D11E4',
    },
    {
      user_id: userId,
      title: 'turpis nec mauris blandit mattis. Cras eget nisi dictum',
      note: 'magna. Praesent interdum',
      status: 'True',
      uuid: '4561CAD7-09C5-5D47-22F6-0147D8C9565D',
    },
    {
      user_id: userId,
      title: 'erat. Etiam vestibulum',
      note:
        'ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus',
      status: 'False',
      uuid: '6264198C-3F68-52B9-3327-B24C42040EF8',
    },
    {
      user_id: userId,
      title: 'risus, at fringilla purus mauris a nunc. In',
      note:
        'tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a',
      status: 'False',
      uuid: 'D06333B7-B01C-77D6-4CE6-4AC714C4D4D7',
    },
    {
      user_id: userId,
      title: 'enim. Etiam imperdiet dictum magna.',
      note:
        'sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a,',
      status: 'True',
      uuid: '1941F342-7B37-3B8F-FFB2-E62691A583EE',
    },
    {
      user_id: userId,
      title: 'convallis,',
      note: 'nisi. Aenean eget metus. In',
      status: 'True',
      uuid: '8A2C8C2D-9D90-F888-2060-3825FD0529B5',
    },
    {
      user_id: userId,
      title: 'egestas ligula.',
      note:
        'ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum',
      status: 'False',
      uuid: 'C2E7DDD9-4F77-85D6-37D0-24F417218620',
    },
    {
      user_id: userId,
      title:
        'Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non,',
      note: 'et',
      status: 'True',
      uuid: 'E4567BBD-9B30-A181-2ED8-6FC587118A4D',
    },
    {
      user_id: userId,
      title:
        'est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat',
      note: 'libero at auctor ullamcorper, nisl arcu iaculis enim, sit',
      status: 'True',
      uuid: 'F5038748-0EAC-1076-24E8-6ED5EAFF4660',
    },
    {
      user_id: userId,
      title:
        'arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae,',
      note:
        'sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor',
      status: 'True',
      uuid: 'C0F049D6-01A6-7186-C655-51A586742F02',
    },
    {
      user_id: userId,
      title: 'facilisis facilisis, magna tellus faucibus leo, in',
      note:
        'vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat',
      status: 'False',
      uuid: '266EF43B-188A-C77F-6FB2-712A4C54B771',
    },
    {
      user_id: userId,
      title:
        'nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque',
      note:
        'parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod',
      status: 'True',
      uuid: '7444D9AD-EAAB-6BDD-CD61-1BCC509ADDD8',
    },
    {
      user_id: userId,
      title:
        'In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas.',
      note:
        'egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non',
      status: 'True',
      uuid: '020D37B7-81A0-7561-EA9C-042E79C0AED9',
    },
    {
      user_id: userId,
      title: 'nisi nibh lacinia orci, consectetuer',
      note:
        'ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras',
      status: 'False',
      uuid: 'FA10B7DE-4EC4-FCD2-3046-525B6B821270',
    },
    {
      user_id: userId,
      title: 'in consequat enim diam',
      note:
        'mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit,',
      status: 'True',
      uuid: '0DA8C7C7-3B7F-11DC-CFA4-B5DD7252D10F',
    },
    {
      user_id: userId,
      title:
        'Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per',
      note:
        'nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet',
      status: 'True',
      uuid: '9A3B0EB7-7188-146D-92B4-69C81609D5D4',
    },
    {
      user_id: userId,
      title: 'sit amet diam',
      note: 'neque',
      status: 'True',
      uuid: '1DBA5DED-FD6B-1739-2C79-98EA9AA2B81A',
    },
    {
      user_id: userId,
      title:
        'hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi',
      note: 'velit. Sed malesuada augue ut lacus. Nulla tincidunt,',
      status: 'True',
      uuid: '9827C39E-6B80-233E-CCA9-7345FAF19695',
    },
    {
      user_id: userId,
      title:
        'Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui.',
      note: 'pede nec',
      status: 'False',
      uuid: '3A3A439B-E364-4975-79B5-73F44A083CD2',
    },
    {
      user_id: userId,
      title:
        'Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue',
      note:
        'nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla',
      status: 'False',
      uuid: '9000E312-6057-24EB-4627-DBD086A9032D',
    },
    {
      user_id: userId,
      title:
        'vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper',
      note:
        'ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat',
      status: 'True',
      uuid: 'B612C23E-E0D8-604D-5581-ED77C6F41DC2',
    },
    {
      user_id: userId,
      title:
        'magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna',
      note:
        'ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui',
      status: 'True',
      uuid: '21084570-2725-9430-535B-700B486853B0',
    },
    {
      user_id: userId,
      title:
        'vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam',
      note:
        'Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum.',
      status: 'True',
      uuid: '749043AB-965A-EC80-F1DA-4AA3E0C1F54C',
    },
    {
      user_id: userId,
      title: 'sed, est. Nunc laoreet lectus',
      note:
        'lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet',
      status: 'True',
      uuid: '6D167DA9-1EF2-4EED-3B68-1DCF9E4EA389',
    },
    {
      user_id: userId,
      title:
        'Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit',
      note:
        'imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget',
      status: 'True',
      uuid: 'AF7C380B-F8C6-45DB-63BD-03CCB35AEB60',
    },
    {
      user_id: userId,
      title:
        'sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis',
      note:
        'ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit',
      status: 'True',
      uuid: '7C85149E-9C87-3A3B-F89C-FB2920B0505D',
    },
    {
      user_id: userId,
      title: 'erat, eget tincidunt dui augue eu tellus. Phasellus elit pede,',
      note:
        'tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies',
      status: 'True',
      uuid: 'F4D3149A-1FD8-BE3A-6592-DEB9F325F7BF',
    },
    {
      user_id: userId,
      title: 'vitae, sodales',
      note:
        'ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet',
      status: 'False',
      uuid: '65C39D7F-848F-6E5C-F940-396A5DD07495',
    },
    {
      user_id: userId,
      title: 'vel, vulputate eu, odio. Phasellus at augue',
      note:
        'risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed',
      status: 'True',
      uuid: '32924BC9-D665-D2A9-C384-744B86910F89',
    },
    {
      user_id: userId,
      title:
        'sem molestie sodales. Mauris blandit enim consequat purus. Maecenas',
      note:
        'egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer',
      status: 'False',
      uuid: 'F29763C1-FB5B-82E4-4A4D-122C2A83CE32',
    },
    {
      user_id: userId,
      title:
        'ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis,',
      note:
        'nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula',
      status: 'True',
      uuid: '8258344F-11C2-DF80-EC51-716D75DB555B',
    },
    {
      user_id: userId,
      title:
        'dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse',
      note:
        'nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis',
      status: 'True',
      uuid: 'CBFB3FE5-809A-05A8-E40A-1508C29BAACA',
    },
    {
      user_id: userId,
      title:
        'nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada.',
      note:
        'Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur',
      status: 'False',
      uuid: '9136BF39-844A-ED90-3B54-1C6AD5EC4964',
    },
    {
      user_id: userId,
      title: 'enim. Etiam gravida molestie arcu. Sed eu nibh',
      note:
        'Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo',
      status: 'False',
      uuid: '0CF82066-03BE-05D1-611A-E0F3530D3A5D',
    },
    {
      user_id: userId,
      title:
        'Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec',
      note:
        'Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel',
      status: 'False',
      uuid: 'E2433832-5DC4-C4DE-6B0E-5F4EFBE776C4',
    },
    {
      user_id: userId,
      title:
        'vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet,',
      note:
        'cubilia Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae',
      status: 'False',
      uuid: '09B5C3C8-F037-E427-E4A4-371B9A079277',
    },
    {
      user_id: userId,
      title:
        'lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat,',
      note:
        'lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel',
      status: 'True',
      uuid: 'C8F47740-959D-700F-D0F1-3DF93DBBFC8F',
    },
    {
      user_id: userId,
      title: 'scelerisque sed, sapien. Nunc pulvinar arcu',
      note:
        'est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec',
      status: 'True',
      uuid: '00515258-8D77-3063-B11C-DDF885A0A8CF',
    },
    {
      user_id: userId,
      title: 'erat, eget tincidunt dui augue',
      note:
        'sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna.',
      status: 'True',
      uuid: '0C9EA6A2-27A9-9963-C36A-CD4FB1FD2AA8',
    },
    {
      user_id: userId,
      title:
        'Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis',
      note: 'gravida nunc sed pede. Cum sociis',
      status: 'False',
      uuid: '3CA246DC-A287-EF80-625D-0DFD0D22E201',
    },
    {
      user_id: userId,
      title:
        'aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem',
      note:
        'ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum',
      status: 'False',
      uuid: '1CD9EBE8-ECB0-A00C-D604-6B560C59F9EA',
    },
    {
      user_id: userId,
      title:
        'laoreet posuere, enim nisl elementum purus, accumsan interdum libero dui nec',
      note:
        'lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum',
      status: 'True',
      uuid: 'E5B4D3A2-6A71-3132-C1A9-C2E53BC0BAE4',
    },
  ];
  await Promise.all(
    wishlist.map(async (item) => {
      const wishlist = await knex('wishlist')
        .select('id')
        .where('uuid', item.uuid);
      if (wishlist.length === 0) {
        return knex('wishlist').insert(item);
      }
    })
  );

  const wishlistitem = await knex('wishlist')
    .select('id')
    .where('uuid', 'E5B4D3A2-6A71-3132-C1A9-C2E53BC0BAE4');
  const wishlistId = wishlistitem[0].id;
  await knex('wishlist_item')
    .where('wishlist_id', wishlistId)
    .del()
    .insert([
      {
        title:
          'sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Al',
        status: false,
        wishlist_id: wishlistId,
      },
      {
        title: 'gnissim pharetra. Nam ac nulla. In tincidunt congue tu',
        status: false,
        wishlist_id: wishlistId,
      },
    ]);
};
