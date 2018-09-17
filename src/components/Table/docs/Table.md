Table example:

    <Table
      data={[
        { name: 'TIM', title: 'engineer' },
        { name: 'Cosmo', title: 'cat' }
      ]}
      definition={[
        { attribute: 'name', header: 'Name', cellRender: name => (<span>{name.toLowerCase()}) },
        { attribute: 'title', header: 'Title' }
      ]}
    />
